import style from "./Navbar.module.css"
import logo from "../../assets/logo-white.png"

function Navbar(){
    return(
        <nav className = {`${style.navbg}`}>
            <div className = {`container ${style.navcont}`}> 
                <img src={logo} alt="logo" className={`${style.img}`}/>
                <h1>NavBar</h1>
            </div>
        </nav>
    )
}

export default Navbar;