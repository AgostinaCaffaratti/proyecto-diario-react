export default function validate(fields) {
  console.log(fields)
  let errors = {}
  if (!/\S+@\S+\.\S+/.test(fields.email)) {
    errors.email = "Email address is invalid"
  }
  if (fields.name === "true") {
    errors.name = "jajajaja"
  }
  return errors
}
