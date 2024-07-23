import logo from './IMG/aprender-en-linea.png';
import logo1 from './IMG/Flecha.png';
import logo2 from './IMG/Registro.png';
import logo3 from './IMG/IMG1.jpg';
import logo4 from './IMG/IMG2.jpg';
import logo5 from './IMG/IMG3.jpg';
import logo6 from './IMG/IMG4.jpg';
import logo7 from './IMG/IMG5.jpg';

import logo8 from './IMG/IMG6.jpg';
import logo9 from './IMG/IMG7.jpeg';
import logo10 from './IMG/IMG8.jpeg';
import logo11 from './IMG/IMG9.jpg';
import logo12 from './IMG/IMG10.jpg';
import logo13 from './IMG/IMG11.jpg';

import logo14 from './IMG/Facebook.png';
import logo15 from './IMG/Tweeter.png';
import logo16 from './IMG/Instagram.png';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="headder1">
        <img src={logo} className="IMG1" alt="logo" />
        <ul className="Lista">

          <li className="A">INICIO</li>
          <li className="B" >SOBRE NOSOTROS</li>
          <li className="C" >CONTACTANOS</li>

        </ul>
        <img src={logo1} className="IMG2" alt="logo" />
        <p className="Isesion">Iniciar Sesion</p>
        <img src={logo2} className="IMG3" alt="logo" />
        <p className="Registro">Registrate</p>


        <div className="ImgCont">
        <img src={logo3} className="IMG4" alt="logo" />
        <img src={logo4} className="IMG5" alt="logo" />
        <img src={logo5} className="IMG6" alt="logo" />
        <img src={logo6} className="IMG7" alt="logo" />
        <img src={logo7} className="IMG8" alt="logo" />

        </div>
        <div className="Txt1">
          <p>En esta seccion se podran encontrar los cursos ofertados para que pongas a prueba tus conocimientos o aprendas nuevas habilidades como programador. ♥ </p>
        </div>
        
        <p className="Txt2">Prog Básica
          <br/>
          Aprende los fundamentos de la programacion y desarrolla tus primeras aplicaciones con conceptos basicos y ejemplos practicos.
        <img src={logo8} className="IMG9" alt="logo" />
        </p>

        <p className="Txt3">POO Esencial
        <br/>
        Descubre los principios de la Programacion Orientada a Objetos y como aplicarlos para crear software modular y reutilizable.
        <img src={logo9} className="IMG10" alt="logo" />
        </p>

        <p className="Txt4">Algoritmos 101
          <br/>
          Introducción a los algoritmos, su diseño y analisis, para resolver problemas de manera eficiente y optimizada.
        <img src={logo10} className="IMG11" alt="logo" />
        </p>
        
        <p className="Txt5">HTML Básico
          <br/>
          Domina el lenguaje de marcado HTML para crear y estructurar paginas web desde cero, sin complicaciones.
        <img src={logo11} className="IMG12" alt="logo" />
        </p>
        
        <p className="Txt6">Diseño WEB
          <br/>
          Aprende los principios del diseño web para crear sistios atractivos y funcionales que ofrecen una excelente experiencia de usuario.
        <img src={logo12} className="IMG13" alt="logo" />
        </p>
        
        <p className="Txt7">Introducción a JavaScript
          <br/>
          Inicia tu camino en la programacion web aprendiendo JavaScript, el lenguaje que da vida e interactividad a las paginas web.
        <img src={logo13} className="IMG14" alt="logo" />
        </p>
        
        <div className="Footer">
          <p className="Contactos">
            <li className="D">
              Contactanos
              <p className="G">
                Telf: 0983799163 <br/><br/>
                Email: Code.Nest@gmail.com <br/><br/>
                255.255.255.0
              </p>
            </li>  
            <li className="E">
              Nuestra ubicacion
              <p className="H">
                Av.De la Patria y Rodrigo Borja N10-150 <br/><br/>
                O visita una de nuestras sucursales <br/>
                en .........
              </p>
            </li>
            <li className="F">
              Redes Sociales
              <p className="I">
                Facebook
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <img src={logo14} className="IMG15" alt="logo" />
              </a><br/><br/> 
                Instagram
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <img src={logo16} className="IMG16" alt="logo" />
              </a><br/><br/>
                Tweeter
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={logo15} className="IMG17" alt="logo" />
              </a>
              </p>
            </li>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
