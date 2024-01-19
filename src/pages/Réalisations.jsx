import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/Réalisations.css'


function Réalisations() {

    return(
        <div className='Realisations'>
            <Header/>
            <main>
                <div className='realisations-intro'>
                    <img src="../public/assets/images/banner.jpg" alt="bannière représentant un flux d'informations" className='banner'/>
                    <h1 className='realisations-title'>PORTFOLIO</h1>
                    <p className='subtitles-realisations'>Voici quelques-unes de mes réalisations</p>
                </div>
                <div className='blue-line'></div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8 col-xl-4'>
                            <section className='FreshFood card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/FreshFood.jpg" alt="Image très colorée de fruits et légumes" className='realisations-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Fresh Food</h2>
                                    <p className='card-text'>Réalisation d'un site avec commande en ligne.</p>
                                    <a href="#" className='btn btn-primary'>Voir</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Site réalisé avec PHP et MySQL</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-4 col-xl-4'>
                            <section className='Restaurant-Akira card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/RestaurantAkira.jpg" alt="Image très colorée de sushi" className='realisations-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Restaurant Akira</h2>
                                    <p className='card-text'>Réalisation d'un site vitrine.</p>
                                    <a href="#" className='btn btn-primary'>Voir</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Site réalisé avec WordPress</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-8 col-xl-4'>
                            <section className='Espace-be card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/Espacebe.jpg" alt="Image de bougies et de pierres représentant le bien-être" className='realisations-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Espace bien-être</h2>
                                    <p className='card-text'>Réalisation d'un site vitrine pour un practicien de bien-être.</p>
                                    <a href="#" className='btn btn-primary'>Voir</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Site réalisé en HTML/CSS</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
  }
  
  export default Réalisations