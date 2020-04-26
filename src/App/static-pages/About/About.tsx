import React, { FC } from 'react';
import styles from '../../App.css';

const About: FC = () => (
  <div className={styles.about__section}>
    <h1>Acerca de este Proyecto</h1>
    <ul>
      <li>
        La información es tomada desde{' '}
        <a
          href='https://github.com/CSSEGISandData/COVID-19'
          target='_blank'
          rel='noopener noreferrer'
        >
          John Hopkins COVID-19 data.
        </a>
      </li>
      <li>
        Creado originalmente por Mike Borozdin - London based Software engineer.
      </li>
      <li>UX/UI creada por Josué Brito - Ecuador based UX engineer.</li>
      <li>
        <a
          href='https://github.com/josue2985/track-a-virus'
          target='_blank'
          rel='noopener noreferrer'
        >
          Proyecto open-source - cualquiera puede tener el codigo.
        </a>
      </li>
      <li>
        Mejoras en camino -{' '}
        <a
          href='https://github.com/mikeborozdin/track-a-virus/projects/1'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          existe un RoadMap público del creador original.
        </a>
      </li>
      <li>
        Si tienes alguna idea o quieres reportar un problema, por favor{' '}
        <a
          href='https://github.com/josue2985/track-a-virus/issues'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repórtalo aquí.
        </a>
      </li>
      <li>Todos son Bienvenidos a Contribuir.</li>
      <li>
        Puedes ponerte en contacto conmigo por{' '}
        <a href='mailto:josue.brito.j@gmail.com'>e-mail</a> o seguirme en{' '}
        <a
          href='https://www.instagram.com/ilove.ux/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram.
        </a>
      </li>
    </ul>
    <h1>Fuenta de Información</h1>
    <ul>
      <li>Información provista por ¨The Jhon Hopkins University¨.</li>
      <li>Actualización Diaria.</li>
      <li>
        Puedes ver los datos sin procesar{' '}
        <a
          href='https://github.com/CSSEGISandData/COVID-19'
          target='_blank'
          rel='noopener noreferrer'
        >
          Aquí.
        </a>
      </li>
    </ul>
    <h1>Cookies & Politicas de Privacidad</h1>
    <ul>
      <li>Las únicas cookies que utilizo son de Google Analytics.</li>
      <li>Ellos nos ayudan a entender como se usa esta web.</li>
      <li>
        Ni yo ni nadie de los que contribuye en este proyecto guarda información
        ni identificacion personal.
      </li>
    </ul>
  </div>
);

export default About;
