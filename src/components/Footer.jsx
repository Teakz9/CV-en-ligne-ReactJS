import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../css/Footer.css';

function Footer () {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="footer">
            <section className="info container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-3">
                        <h2 className="Doe">John Doe</h2>
                        <div className="coordonates">
                            <p>40 Rue Laure Diebold</p>
                            <p>69009 Lyon, France</p>
                            <p>Téléphone : 06 20 30 40 50</p>
                        </div>

                        <a href="https://github.com/" target="_blank"><img src="../public/assets/images/logo-github.png" alt="Le logo de GitHub" className="sm-logo"/></a>
                        <a href="https://twitter.com/" target="_blank"><img src="../public/assets/images/logo-twitter.png" alt="Le logo de Twitter" className="sm-logo" /></a>
                        <a href="https://fr.linkedin.com/" target="_blank"><img src="../public/assets/images/logo-linkedin.png" alt="Le logo de LinkedIn" className="sm-logo" /></a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3">
                        <h2 className="site-link">Liens utiles</h2>
                        <ul>
                            <li className="pages-link">
                                <Link to="/" className="footer-link">Accueil</Link>
                            </li>
                            <li className="pages-link">
                                <Link to="/blog" className="footer-link">Blog</Link>
                            </li>
                            <li className="pages-link">
                                <Link to="/services" className="footer-link">Services</Link>
                            </li>
                            <li className="pages-link">
                                <Link to="/contact" className="footer-link">Contact</Link>
                            </li>
                            <li className="pages-link">
                                <Link to="/mlegales" className="footer-link">Mentions Légales</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3">
                        <h2 className="last-real">Mes dernières réalisations</h2>
                        <ul>
                            <li className="real-link">
                                <Link to="/realisations" className="footer-link">Fresh Food</Link>
                            </li>
                            <li className="real-link">
                                <Link to="/realisations" className="footer-link">Restaurant Akira</Link>
                            </li>
                            <li className="real-link">
                                <Link to="/realisations" className="footer-link">Espace bien-être</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3">
                        <h2 className="last-article">Mes derniers articles</h2>
                        <ul>
                            <li className="blog-link">
                                <Link to="/realisations" className="footer-link">Coder son site en HTML/CSS</Link>
                            </li>
                            <li className="blog-link">
                                <Link to="/realisations" className="footer-link">Vendre ses produits sur le web</Link>
                            </li>
                            <li className="blog-link">
                                <Link to="/realisations" className="footer-link">Se positionner sur Google</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </section>
                <p className="copyright">© Designed by John Doe</p>
                <div className="button-center">
                {showButton && (
                <button className='button-top' onClick={scrollToTop}>Remonter</button>
                )}
                </div>
            </div>
    )
  }
  
  export default Footer;