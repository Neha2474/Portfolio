import './index.css'
import Passport from './assets/Passport.jpeg'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
const HomePage = () => {

    const el = useRef(null)

    useEffect(() => {
        // Initialize Typed.js on the referenced element
        const typed = new Typed(el.current, {
            strings: ['Web Designer', 'Frontend Developer', 'Web Developer', 'Python Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        })
        // Cleanup: destroy Typed instance when component unmounts
        return () => {
            typed.destroy()
        }
    }) // Empty dependency array ensures this runs once on mount

  return (
    <div className='home-background'>
        <section className=' home text-light d-flex flex-column flex-md-row align-items-center justify-content-evenly min-vh-100 p-3 p-md-5 gap-4' id='home'>
                <div className='home-content text-center text-md-start col-12 col-md-6 px-2 px-md-4 col-lg-7' >
                    <h3 className="display-6 fs-3">Hello, It's Me</h3>
                    <h1 className='my-2 display-4 fw-bold'>Neha Thosar</h1>
                    <h3 className="display-6 fs-3">I am a{' '}<span ref={el} style={{ color: '#0ef' }}></span></h3>
                    <p className='lead fs-6 mt-4 mt-md-5'>
                        Aspiring Full Stack Web Developer with a strong understanding of front-end and back-end development. Familiar with designing, developing, and maintaining responsive, user-friendly web applications. Eager to apply technical knowledge, learn new technologies, solve real-world problems, and contribute to organizational growth while continuously enhancing development skills.
                    </p>
                    <div className='mt-5'><a href="../public/Neha_Thosar_Resume.pdf" download="Neha_Thosar_Resume.pdf" className='btn-box'>Download Resume</a></div>
                </div>

                <div className='home-img d-flex justify-content-center col-12 col-md-5 col-lg-4'>
                   <img src={Passport} className='img-fluid imgg mb-5 ' alt='Neha Thosar' style={{ maxWidth: '350px', height: 'auto', borderRadius: '50%' }}/>
                </div>
        </section>
    </div>
  )
}

export default HomePage