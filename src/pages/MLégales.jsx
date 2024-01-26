import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/MLegales.css'

function MLégales() {

    return(
        <div className="mlegales">
            <Header/>
            <main>
                <div className='mlegales-intro'>
                        <h1 className='mlegales-title'>MENTIONS LÉGALES</h1>
                        <div className='blue-line'></div>
                </div>
                <div className='accordion' id='accordionMlegales'>
                    <div className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                                Éditeur du site
                            </button>
                        </h2>
                        <div id='collapseOne' className='accordion-collapse collapse show' data-bs-parent='#accordionMlegales'>
                            <div className='accordion-body'>
                                <h4 className='editor-name'>John Doe</h4>
                                <p className='editor-info'>📍40 Rue Laure Diebold</p>
                                <p className='editor-info'>69009, Lyon, France</p>
                                <p className='editor-info blue-info'>📱06 20 30 40 50</p>
                                <p className='editor-info blue-info'>📧john.doe@gmail.com</p>
                            </div>
                        </div>
                    </div>
 

                    <div className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                                Hébergeur
                            </button>
                        </h2>
                        <div id='collapseTwo' className='accordion-collapse collapse' data-bs-parent='#accordionMlegales'>
                            <div className='accordion-body'>
                                <h4 className='host-name'>Always Data</h4>
                                <p className='host-info'>91 rue du Faubourg Saint Honoré</p>
                                <p className='host-info'>75008 Paris</p>
                                <p className='host-info blue-info'>🌐<a href='https://www.alwaysdata.com/fr/' target='_blank' className='host-link'>www.alwaysdata.com</a></p>
                            </div>
                        </div>
                    </div>


                    <div className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                                Crédits
                            </button>
                        </h2>
                        <div id='collapseThree' className='accordion-collapse collapse' data-bs-parent='#accordionMlegales'>
                            <div className='accordion-body'>
                                <h4 className='credits-name'>Crédits</h4>
                                <p className='credits-info'>Site développé par John Doe, étudiant du CEF.</p>
                                <p className='credits-info'>Les images libres de droit sont issues du site <span className='blue-info'><a href='https://pixabay.com/fr/' target='_blank' className='images-link'>Pixabay</a></span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
  }
  
  export default MLégales