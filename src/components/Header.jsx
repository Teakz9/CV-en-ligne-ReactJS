import Nav from './Nav.jsx';
import GitHubProfile from './GitHubProfile.jsx';
import '../css/Header.css';

function Header () {

    return(
        <header>
            <GitHubProfile/>
            <Nav/>
        </header>
    )
  }
  
  export default Header;