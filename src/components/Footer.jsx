import React from "react";
import { Link } from "react-router-dom";
import '../css/Footer.css';


function Footer () {

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

                        <img src="../public/assets/images/logo-github.png" alt="Le logo de GitHub" className="sm-logo"/>
                        <img src="../public/assets/images/logo-twitter.png" alt="Le logo de twitter" className="sm-logo" />
                        <img src="../public/assets/images/logo-linkedin.png" alt="Le logo de LinkedIn" className="sm-logo" />
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
                            <li className="real-link">Fresh food</li>
                            <li className="real-link">Restaurant Akira</li>
                            <li className="real-link">Espace bien-être</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3">
                        <h2 className="last-article">Mes derniers articles</h2>
                        <ul>
                            <li className="article-link">Coder son site en HTML/CSS</li>
                            <li className="article-link">Vendre ses produits sur le web</li>
                            <li className="article-link">Se positionner sur Google</li>
                        </ul>
                    </div>
                </div>
                </section>
                <p className="copyright">© Designed by John Doe</p>
            </div>
    )
  }
  
  export default Footer;