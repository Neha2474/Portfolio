import "./index.css";

const About = () => {
  return (
    <div className="back" id='about'>
        <section className='about d-flex justify-content-center align-items-center text-light text-center min-vh-100'>
                <div className=''>
                    <h2>About <span style={{ color: '#0ef' }}>Me</span></h2>
                    <h4 className='my-5' style={{ color:'rgb(200, 226, 53)'}}>Frontend Developer</h4>
                    <p style={{textAlign:'justify', textAlignLast:'center'}} className='mx-5 fs-6 d-flex flex-column flex-md-row align-items-center text-align-center'>
                        I am a motivated Frontend Developer and Web Designer dedicated to creating dynamic, responsive, and user-friendly web applications. With a solid foundation in React.js, JavaScript, Bootstrap, HTML, and CSS, I bridge the gap between design and clean code. I am eager to bring my problem-solving skills and passion for modern web technologies to an entry-level position where I can contribute to impactful projects. Passionate Frontend Developer with a knack for turning complex problems into intuitive, responsive user interfaces. My technical toolkit includes React.js, modern JavaScript, and Bootstrap. As an entry-level developer, I focus on writing clean, semantic code and optimizing web performance. I am actively looking for opportunities to collaborate with a forward-thinking engineering team.
                    </p>

                    <h4 className='my-5' style={{ color:'rgb(200, 226, 53)'}}>Python Developer</h4>
                    <p style={{textAlign:'justify', textAlignLast:'center'}} className='mx-5 fs-6 d-flex flex-column flex-md-row align-items-center text-align-center'>
                       Enthusiastic and dedicated Python Developer with a strong foundation in software development, backend programming, and problem-solving. Possesses knowledge of application development, database management, and API integration, along with an understanding of software development principles. Eager to apply academic and practical knowledge to real-world projects, explore new technologies, and develop efficient software solutions. A quick learner with strong analytical thinking, adaptability, and a passion for continuous learning and professional growth. Looking forward to contributing to a collaborative team and building a successful career in software development.
                    </p>
                </div>
            </section>
    </div>
  )
}

export default About