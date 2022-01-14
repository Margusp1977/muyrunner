import React, { Fragment } from 'react';

  const Footer = () => {
    const customStyle = {
               backgroundColor: "red",
               padding: "10px",
               fontFamily: "Arial",
               color: "white",
               fontSize: "22px"
        }

        return <Fragment><div style={customStyle}> Hola soy el footer</div></Fragment>

  }

export default Footer;
