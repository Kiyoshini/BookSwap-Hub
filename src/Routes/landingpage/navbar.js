import './navbar.css'

const Navbar = () => {

  return ( 
    <nav>
      <div className="navBar">
        <div className="navBar_left_section">
          <img className='navLogo' src='/Images/Landingpage/navBar/NavLogo.png' alt=''/>
          <p className="logoName">
          BookSwap Hub
          </p>
        </div>
        <div className="navBar_middle_section">
          <input type="text" className="searchBar" placeholder='Enter your book name'/>
          <div className="searchBarImageContainer">
          </div>
        </div>
        <div className="navBar_right_section">
          <div className="aboutcontainer">About</div>
          <div className="loginContainer">Login</div>
          <div className="getStartedContainer">Get Started</div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;