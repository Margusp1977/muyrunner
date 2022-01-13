import React, { Fragment } from 'react';

//class Footer extends React.Component {
  //  render() {
  //     const customStyle = {
  //       backgroundColor: "red",
  //       padding: "10px",
  //       fontFamily: "Arial",
  //       color: "white",
  //       fontSize: "22px"
  //}

        //return(
  //        <Fragment>
  //        <h1>Hola</h1>   
  //        <div style={customStyle}> Hola soy el footer</div>
  //        </Fragment>
  //  )
  //  }
  //    }

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
