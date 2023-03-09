import "./NavBar.css";
import Logo from "./logo.svg";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {

    return (
        <header>
            <nav className="container">

                <a href="#" className="logo">
                    <img src={Logo} alt="Logo" />
                </a>

                <div className="nav">
                    <a href="#">Hamburguesas</a>
                    <a href="#">Papas Fritas</a>
                    <a href="#">Bebidas</a>
                </div>

                <CartWidget/>

            </nav>
        </header>
    )        

}

export default NavBar