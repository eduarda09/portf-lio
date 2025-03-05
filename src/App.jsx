
import styles from './App.module.css'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'


function App() {


  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  )
}

export default App
