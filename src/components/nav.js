import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {message} from "antd";

function Nav(){
    const [navActive,setNavActive] = useState(false);
    
    const toggleNav = () => {
        setNavActive(!navActive);
      };
    
      const closeMenu = () => {
        setNavActive(false);
      };
      return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <div>
            <img src="../Emitence_logo.png" alt="" width={"150px"}></img>
          </div>
          <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
            <span className="nav__humburger__line"></span>
            <span className="nav__humburger__line"></span>
            <span className="nav__humburger__line"></span>
          </a>
          <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="/"
                  className="btn btn-outline-primary sp"
                >
                  Home
                </Link>
              </li>
   
                <>
                  <li>
                    <Link
                      onClick={closeMenu}
                      activeClass="navbar--active-content navbar--items"
                      id="tasks"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="/create-task"
                      className="btn btn-outline-primary sp"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={closeMenu}
                      activeClass="navbar--active-content"
                      id="completed"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="/completed"
                      className="btn btn-outline-primary sp"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    {/* <button className="btn btn-primary sp" id="log-out" onClick={logoutHandler}>
                      Logout
                    </button> */}
                  </li>
                </>
              
            
                <>
                  {/* <li>
                    <Link
                      onClick={closeMenu}
                      activeClass="navbar--active-content"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="/register"
                      id="sig"
                      className="btn btn-outline-primary sp"
                    >
                      Sign-Up
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      onClick={closeMenu}
                      activeClass="navbar--active-content"
                      id="log"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="/login"
                      className="btn btn-outline-primary sp"
                    >
                      Login
                    </Link>
                  </li> */}
                </>
              
            </ul>
          </div>
        </nav>
      );
}

export default Nav;
