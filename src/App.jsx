import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Intro } from './components/intro'
import { Projects } from './components/projects'

function App() {


  useEffect(() => {

    ScrollReveal().reveal('.nav-link', {
      delay: 300,
      distance: '20px',
      origin: 'top',
      easing: 'ease-in-out',
      interval: 100
    });

    ScrollReveal().reveal('.scrollOne', {
      delay: 300,
      distance: '20px',
      origin: 'top',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.welcome-section-img', {
      delay: 500,
      distance: '5%',
      origin: 'right',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.scrollTwo', {
      delay: 500,
      distance: '10%',
      origin: 'top',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.scrollThree', {
      delay: 500,
      distance: '5%',
      origin: 'top',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interval', {
      delay: 500,
      distance: '30px',
      origin: 'top',
      easing: 'ease-in-out',
      interval: 100
    });

    ScrollReveal().reveal('h2', {
      delay: 500,
      distance: '15%',
      origin: 'top',
      easing: 'ease-in-out',
    });
  }, []);



  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
