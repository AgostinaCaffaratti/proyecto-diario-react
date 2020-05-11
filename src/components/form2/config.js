export default {
  config: {
    messages: {
      success: "Recibimos tu Suscripcion! Gracias por elegirnos.",
      error: "Ocurrio un error. por favor contactanos a info@notiweb.com",
    },
    buttonText: "Send",
    spinner: true,
  },
  fields: [
    {
      label: "Name",
      type: "text",
      placeholder: "Jane Doe",
      required: true,
    },
    {
      label: "Location",
      placeholder: "Cordoba, AR",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "notiweb@gmail.com",
      required: true,
    },
    {
      label: "Message",
      type: "textarea",
      maxlength: 150,
      placeholder: "Enter your message...",
      required: true,
    },
  ],
}
