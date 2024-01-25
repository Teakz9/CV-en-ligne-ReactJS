import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/Contact.css'

function Contact() {

    return(
        <div className='Contact'>
            <Header/>
            <main className='fond-bleu'>
                <div className='contact-content'>
                    <div className='contact-intro'>
                        <h1 className='contact-title'>ME CONTACTER</h1>
                        <p className='subtitles-contact-page'>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    </div>
                    <div className='blue-line'></div>
                    <div className='container'>
                        <div className='row'>
                            <section className='form col-sm-12 col-md-6 col-lg-6'>
                                <h2 className='contact-subtitle'>Formulaire de contact</h2>
                                <div className='blue-line-title'></div>
                                <form action="#">
                                    <div className='form-element'>
                                        <input type="text" placeholder='Votre nom' className='form-case'/>
                                    </div>
                                    <div className='form-element'>
                                        <input type="text" placeholder='Votre adresse email' className='form-case'/>
                                    </div>
                                    <div className='form-element'>
                                        <input type="text" placeholder='Votre numéro de téléphone' className='form-case'/>
                                    </div>
                                    <div className='form-element'>
                                        <input type="text" placeholder='Sujet' className='form-case'/>
                                    </div>
                                    <div className='form-element'>
                                        <textarea name="message" id="" cols="30" rows="8" placeholder='Votre message' className='form-case'></textarea>
                                    </div>
                                    <button className='btn btn-primary btn-form'>Envoyer</button>
                                </form>
                            </section>
                            <section className='coordonates col-sm-12 col-md-6 col-lg-6'>
                                <h2 className='contact-subtitle'>Mes coordonnées</h2>
                                <div className='blue-line-title'></div>
                                <p className='adress'>📍 40 Rue Laure Diebold, 69000, Lyon, France</p>
                                <p className='phone'>📱 06 20 30 40 50</p>
                                <div className='location'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621743!2d4.796403976801551!3d45.778661971080915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1706122080007!5m2!1sfr!2sfr" frameborder="0" className='mini-map'></iframe>
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
  
  export default Contact