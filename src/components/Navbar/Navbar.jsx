import './index.css';
import logo from './logo.svg'

const Navbar = () => {

  return (
    <nav className="main-navbar">
    <section className="logotype">
      <img className="logo" src={logo} alt="logo" />
    </section>
    <section className="dropdown">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
      </ul>
    </section>
  </nav>
  )
}

export default Navbar;