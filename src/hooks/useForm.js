import  {useState, useContext} from 'react'
import FormContext from './../context/formContext'

export default function useForm (){ 
    
const [nameEerrors, setNameErrors] = useState(false)
const [emailErrors, setEmailErrors] = useState(false)
const [ message, setMessage ] = useState(false)
const {datos, setDatos} = useContext(FormContext)

// const [datos, setDatos] = useState({
//   name: "",
//   email: "",
//   seccion: "Politica",
// })

const handleChange = (e) => {
  
  setNameErrors(false)
  setEmailErrors(false)
  setDatos({
    ...datos,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = (e) => {
  e.preventDefault()

  const [name, email] = e.target.elements
  const nameValue = name.value
  const emailValue = email.value

  if (nameValue === "") {
    setNameErrors(true)
    return false
  }
  if (emailValue === "") {
    setEmailErrors(true)
    return false
  }
  localStorage.setItem('form', datos.seccion)
  

  setMessage(true)
}
return {datos, nameEerrors, emailErrors,handleSubmit,handleChange, message}
}