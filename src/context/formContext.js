import React, {useState} from 'react'

const Context = React.createContext({})

export function FormContextProvider({children}){

    const [datos, setDatos] = useState({
        name: "",
        email: "",
        seccion:  window.localStorage.getItem('form'),
      })
     
    return <Context.Provider value = {{datos, setDatos}}>
        {children}
    </Context.Provider>
}

export default Context