import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/Blog.css'

function Blog() {

    return(
        <div className='Blog'>
            <Header/>
            <main>
                <div className='blog-intro'>
                    <img src="../public/assets/images/banner.jpg" alt="bannière représentant un flux d'informations" className='banner'/>
                    <h1 className='blog-title'>PORTFOLIO</h1>
                    <p className='subtitles-blog'>Voici quelques-unes de mes réalisations</p>
                </div>
                <div className='blue-line'></div>

                <div className='blog-list container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-xl-4'>
                            <section className='card blog-card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/imagecodehtml.jpg" alt="Image représentant un écran avec un développement de code HTML" className='blog-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Coder son site en HTML/CSS</h2>
                                    <p className='card-text'>Les languages HTML et CSS sont essentiels à apprendre pour bien débuter dans le Développement Web et Web Mobile. Cet article permet de bien vous introduire dans le domaine du code !</p>
                                    <a href="#" className='btn btn-primary'>Lire la suite</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Publié le 22 août 2022</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-6 col-xl-4'>
                            <section className='card blog-card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/vendreproduits.jpg" alt="Imllustration de monnaie qui pousse comme dese plantes" className='blog-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Vendre ses produits sur le web.</h2>
                                    <p className='card-text'>Le domaine du Développement Web et Web Mobile vous ouvres de grandes portes. Grâce à cet article, vous pouvez apprendre comment monétiser vos compétences et permettre de vivre de votre travail en toute indépendance.</p>
                                    <a href="#" className='btn btn-primary'>Lire la suite</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Publié le 20 août 2022</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-6 col-xl-4'>
                            <section className='card blog-card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/ordinateurgoogle.jpg" alt="Image d'un ordinateur avec le navigateur Google d'ouvert" className='blog-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Se positionner sur Google</h2>
                                    <p className='card-text'>Être bien situé dans les moteurs de recherche est important pour apporter de la visibilité et de la rentabilité à vos applications Web. Regardez-ceci pour en apprendre plus.</p>
                                    <a href="#" className='btn btn-primary'>Lire la suite</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Publie le 1 août 2022</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-6 col-xl-4'>
                            <section className='card blog-card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/imageresponsive.jpg" alt="Image de plusieurs appareils illustrant la caractéristiques responsive" className='blog-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Coder en responsive design</h2>
                                    <p className='card-text'>Les avancées technologiques sont de plus en plus rapides et la majorité des utilisateurs naviguent sur le Web avec un smartphone. Apprenez comment rendre vos applications Web adaptatives en fonction des tailles d'écrans en lisant ceci.</p>
                                    <a href="#" className='btn btn-primary'>Lire la suite</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Publié le 31 juillet 2022</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-6 col-xl-4'>
                            <section className='card blog-card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/imagereferencement.jpg" alt="Image de plusieurs mot désignant le référencement" className='blog-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Technique de référencement</h2>
                                    <p className='card-text'>Le référencement, travaillé par les "SEOs" est nécessaire à la visibilité des applications Web. Rendez vos créations mieux référencées en vous informant ici.</p>
                                    <a href="#" className='btn btn-primary'>Lire la suite</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Publié le 30 juillet 2022</p>
                                </div>
                            </section>
                        </div>
                        <div className='col-sm-12 col-md-6 col-xl-4'>
                            <section className='card blog-card' style={{width: "18rem",}}>
                                <img src="../public/assets/images/imagelanguagecode.jpg" alt="Image de plusieurs logos de languages informatique" className='blog-img'/>
                                <div className='card-body'>
                                    <h2 className='card-title'>Apprendre à coder</h2>
                                    <p className='card-text'>Il existe un tas de languages informatiques plus ou moins utilisés. Cet article va permettre de vous renseignez sur une grande partie de ceux-ci.</p>
                                    <a href="#" className='btn btn-primary'>Lire la suite</a>
                                </div>
                                <div className='card-footer'>
                                    <p>Publié le 12 juillet 2022</p>
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
  
  export default Blog