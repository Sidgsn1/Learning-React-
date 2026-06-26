const logo = new URL("../../Assets/urbanBite.jpeg", import.meta.url).href;

const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;