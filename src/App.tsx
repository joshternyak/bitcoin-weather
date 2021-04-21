import React from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import "./App.scss"
import "antd/dist/antd.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppCreators/>
    </div>
  )
}

export default App
