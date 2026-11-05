import "./index.css";
import MERN_Stack from "./assets/MERN_Stack.jpg"
import Internship from "./assets/Internship.jpg"
import Training from "./assets/Training.jpg"
import Research_Paper from "./assets/Research_Paper.jpg"

const Certifications = () => {
  return (
    <div className='text-white text-center back' id="certifications">
        <section className='container-fluid text-white text-center' >
            <h2 className='py-5' style={{ color: '#0ef' }}>Certifications</h2>

            <div className='d-flex flex-wrap justify-content-center gap-5'>
                <div>
                    <figure>
                        <a href={MERN_Stack} target="_blank" rel="noopener noreferrer">
                            <img src={MERN_Stack} alt="MERN Stack" style={{ width: '250px', height: '300px' }}/>
                        </a>
                        <figcaption className="py-4"> MERN Stack</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <a href={Internship} target="_blank" rel="noopener noreferrer">
                            <img src={Internship} alt="Internship" style={{ width: '250px', height: '300px' }}/>
                        </a>
                        <figcaption className="py-4"> Internship</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <a href={Training} target="_blank" rel="noopener noreferrer">
                            <img src={Training} alt="Training" style={{ width: '250px', height: '300px' }}/>
                        </a>
                        <figcaption className="py-4"> Training</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <a href={Research_Paper} target="_blank" rel="noopener noreferrer">
                            <img src={Research_Paper} alt="Research Paper" style={{ width: '250px', height: '300px' }}/>
                        </a>
                        <figcaption className="py-4"> Research Paper</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Certifications