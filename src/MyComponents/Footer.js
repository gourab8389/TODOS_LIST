import React from 'react'
import './footer.css'

 const Footer = () => {
  let footerStyle = {
    position: "relative",
    top:"10vh",
    width: "100%",
    border: "2px solid red"
  }
  return (
    <footer style={footerStyle} className="bg-dark text-light py-3">
      <p className="text-center">
      Copyright &copy; MyTodosList.com Gourab
      </p>
    </footer>
  )
}

export default Footer
