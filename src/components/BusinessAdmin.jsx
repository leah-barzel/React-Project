import { useState } from "react"
import BusinessData from "./BusinessData"
import { Outlet, Link } from "react-router-dom"

function BusinessAdmin() {

  return (
    <>
      <BusinessData />
      <br/>

      <Link to="./services">services</Link>
      |
      <Link to="./meeting">meeting</Link>
      <br/>
      outlet:
      <br/>
      <Outlet />
    </>
  )
}

export default BusinessAdmin
