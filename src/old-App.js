import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import CartWidget from "./components/CartWidget.jsx";

function App() {
    return ( < div className = "App" >
        <
        NavBar / >

        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Tienda de articulos deportivos < /p> <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React < /a> </header >
        <
        /div>
    );
}

export default App;