import React from 'react';

class Footer extends React.Component {
    render() {
        const customStyle = {
            backgroundColor: "red",
            padding: "10px",
            fontFamily: "Arial",
            color: "white",
            fontSize: "22px"
        }

        return(
            <div>Hola soy el footer</div>
        )
    }
}

export default Footer;