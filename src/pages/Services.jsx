import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/Services.css'

function Services() {

    return(
        <div className='Services'>
            <Header/>
                <main className='services-content'>
                    <div>
                        <div className='services-intro'>
                            <img src="../public/assets/images/banner.jpg" alt="" className='banner'/>
                            <h1 className='services-title'>MON OFFRE DE SERVICES</h1>
                            <p className='subtitles-services'>Voici les prestations sur lesquelles je peux intervenir.</p>
                        </div>
                            <div className='blue-line'></div>
                    <div className='container'>
                        <div className='row'>
                                <div className='uxdesign-section right-border col-sm-12 col-md-4 col-xl-4'>
                                    <img src="../public/assets/images/logo-uxdesign.png" alt="Logo simpliste illustrant l'ux design" className='section-logo'/>
                                    <h2 className='services-offer'>UX DESIGN</h2>
                                    <p className='services-content'>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                                </div>

                                <div className='dev-section right-border col-sm-12 col-md-4 col-xl-4'>
                                    <img src="../public/assets/images/logo-dev.png" alt="Logo simpliste illustrant le développement web" className='section-logo'/>
                                    <h2 className='services-offer'>DÉVELOPPEMENT WEB</h2>
                                    <p className='services-content'>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                                </div>

                                <div className='seo-section col-sm-12 col-md-4 col-xl-4'>
                                    <img src="../public/assets/images/logo-seo.png" alt="Logo simpliste illustrant le référencement" className='section-logo'/>
                                    <h2 className='services-offer'>RÉFÉRENCEMENT</h2>
                                    <p className='services-content'>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                                </div>
                        </div>
                    </div>
                    </div>
                </main>
            <Footer/>
        </div>
    )
  }
  
  export default Services;