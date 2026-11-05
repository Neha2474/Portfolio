import './index.css'
import { useEffect, useState } from 'react'
 
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
]


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + 120
      const currentSection = sections.reduce((current, section) => (
        section.offsetTop <= scrollPosition ? section : current
      ), sections[0])

      if (currentSection) {
        setActiveLink(currentSection.id)
      }
    }

    updateActiveLink()
    window.addEventListener('scroll', updateActiveLink, { passive: true })
    window.addEventListener('resize', updateActiveLink)

    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('resize', updateActiveLink)
    }
  }, [])

  return (
    <div className='' style={{position:'sticky', top:0, zIndex:1000}}>
         <nav className='navbar navbar-expand-lg nav sticky-top'>
                <div className='container-fluid px-md-5'>
                    <h2 className='navbar-brand fs-2 text-light mb-0 flex-grow-1'>
                        Portfolio
                    </h2>
                    <button
                        className='navbar-toggler'
                        type='button'
                        aria-controls='navbarNav'
                        aria-expanded={isMenuOpen}
                        aria-label='Toggle navigation'
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse justify-content-end${isMenuOpen ? ' show' : ''}`}
                        id='navbarNav'>
                        <div className='navbar-nav align-items-center mt-3 mt-lg-0 fs-5'>
                            {links.map(({ label, href }) => {
                                const linkId = href.slice(1)
                                const isActive = activeLink === linkId

                                return (
                                    <a
                                        className={`nav-link text-white px-3${isActive ? ' active' : ''}`}
                                        href={href}
                                        aria-current={isActive ? 'page' : undefined}
                                        onClick={() => {
                                          setActiveLink(linkId)
                                          setIsMenuOpen(false)
                                        }}
                                        key={linkId}
                                    >
                                        {label}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar