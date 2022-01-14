import React from 'react';


function NavBar() {
    return (
      <div>
        <nav >
          <a > MUY RUNNER</a>
          <div>
            <ul >
              <li >
                <a >Inicio </a>
              </li>
              <li>
                <a >Productos</a>
              </li>
              <li >
                <a>Sobre nosotros</a>
              </li>
              <li>
                <a >Contacto</a>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  export default NavBar;
