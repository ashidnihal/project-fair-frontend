
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <div> <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/'>
      <FaLaptopCode fontSize={'40px'}/> 
         Project Fair
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header