import React from "react";
import '../css/Footer.css'


function Footer () {

    return(
        <div className="footer">
            <section className="info">
                <h2 className="Doe">John Doe</h2>
                <div className="coordonates">
                    <p>40 Rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                </div>

                <img src="../public/assets/images/logo-github.png" alt="Le logo de GitHub" />
                <img src="../public/assets/images/logo-twitter.png" alt="Le logo de twitter" />
                <img src="../public/assets/images/logo-linkedin.png" alt="Le logo de LinkedIn" />

                <h2 className="site-link">Liens utiles</h2>
                <ul>
                    <li className="pages-link">Accueil</li>
                    <li className="pages-link">À propos</li>
                    <li className="pages-link">Services</li>
                    <li className="pages-link">Me contacter</li>
                    <li className="pages-link">Mentios légales</li>
                </ul>

                <h2 className="last-real">Mes dernières réalisations</h2>
                <ul>
                    <li className="real-link">Fresh food</li>
                    <li className="real-link">Restaurant Akira</li>
                    <li className="real-link">Espace bien-être</li>
                </ul>

                <h2 className="last-article">Mes derniers articles</h2>
                <ul>
                    <li className="article-link">Coder son site en HTML/CSS</li>
                    <li className="article-link">Vendre ses produits sur le web</li>
                    <li className="article-link">Se positionner sur Google</li>
                </ul>
            </section>
            <p className="copyright">© Designed by John Doe</p>
        </div>
    )
  }
  
  export default Footer;