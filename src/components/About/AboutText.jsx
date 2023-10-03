import React from 'react';
import styles from './AboutText.module.css'

const AboutText = () => {
    return (
        <div className={styles.divAbout}>
            <h1 className={styles.h1About}>About Us</h1>
            <p className={styles.textAbout}>¡Bienvenidos a nuestro sitio web! Somos un equipo de apasionados amantes de la cultura pop y del emocionante mundo de la serie de televisión "Rick and Morty". Este proyecto nació como parte de nuestro programa de práctica en el programa de Desarrollo Frontend de "Soy Henry".</p>
            <h1 className={styles.h1About}>Nuestro Propósito</h1>
            <p className={styles.textAbout}>En este espacio, buscamos brindarte una experiencia única relacionada con "Rick and Morty", una de las series más creativas y entretenidas de la televisión actual. Nuestro objetivo es compartir nuestro amor por la serie, su humor irreverente, su ciencia ficción extravagante y sus personajes inolvidables.</p>
            <h1 className={styles.h1About}>Explorando el Multiverso de "Rick and Morty"</h1>
            <p className={styles.textAbout}>A través de nuestro sitio, podrás explorar y descubrir detalles fascinantes sobre los episodios, personajes y teorías detrás de "Rick and Morty". Te invitamos a adentrarte en el intrigante multiverso creado por Dan Harmon y Justin Roiland. Ya sea que seas un fanático de toda la vida o estés buscando información sobre la serie, ¡aquí encontrarás contenido interesante y entretenido!</p>
            <h1 className={styles.h1About}>Nuestro Compromiso</h1>
            <p className={styles.textAbout}>Queremos que esta página sea un recurso completo para todos los seguidores de "Rick and Morty". Desde reseñas de episodios hasta análisis profundos, estamos comprometidos a brindarte información de calidad y a compartir nuestra pasión por esta serie innovadora.</p>
            <h1 className={styles.h1About}>Únete a Nuestra Comunidad</h1>
            <p className={styles.textAbout}>Te invitamos a ser parte de nuestra comunidad. Siéntete libre de explorar nuestro sitio, dejar tus comentarios y compartir tus teorías y pensamientos sobre la serie. ¡Estamos emocionados de que te unas a nosotros en este viaje por el multiverso de "Rick and Morty"!
            Gracias por visitarnos y disfrutar de nuestro proyecto. ¡Esperamos que te diviertas explorando todo lo que tenemos para ofrecer!</p>
            
            <a className={styles.contactAbout} href="/contact" class="btn btn-primary">Contact Me!</a>
        </div>
    )
};

export default AboutText;