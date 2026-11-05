import './index.css'
import LegalTech from './assets/legaltech.webp'
import Insta from './assets/insta.png'

const Projects = () => {
  return (
    <div className="back " id="projects">
        <section className='grid container text-white text-center'>
                <h2 className=''>Projects</h2>
                <h3 className='my-5' style={{ color: '#0ef' }}>Frontend Projects</h3>
                <div className="responsive-grid ">
                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card insta py-5" style={{ backgroundImage: `url(${Insta})` }}></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Instagram Login UI</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast: 'center',color:'#d3dfe1', fontWeight:'500'}}>
                            Built Instagram login interface using React.js and reusable components. Implemented responsive design and interactive frontend elements. Applied modern CSS techniques for clean UI/UX.
                            </p>
                            <a href="https://instagramclone-mauve.vercel.app/Login" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
                        </div>
                    </div>

                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card ecommerce py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>E-Commerce Website</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                                Built an E-Commerce website using React.js and reusable components. Built an E-Commerce website using React.js and reusable components. Applied modern CSS styling techniques for clean UI/UX.
                            </p>
                            <a href="https://ecommercesite-brown.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card calculator py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Calculator</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                                Built as web calculator using React and Bootstrap. This project focuses on production-grade execution by combining strict input validation logic with physical desktop keyboard integration.
                            </p>
                            <a href="https://calculator-iota-flame-80.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
                        </div>
                    </div>

                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card todolist py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Todo List</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                                Built a responsive todo list web app using React, allowing you to add and delete tasks instantly. The app features a clean interface and is optimized for both desktop and mobile devices, making task management easy and efficient. 
                            </p>
                            <a href="https://todoapplication-murex.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
                        </div>
                    </div>
                </div>              
        </section>

         <section className='grid container text-white text-center'>
                <h3 className='my-5' style={{ color: '#0ef' }}>Python Mini Projects</h3>
                <div className="responsive-grid ">
                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card ATM py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>ATM Management</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast: 'center',color:'#d3dfe1', fontWeight:'500'}}>
                                Built a simple command-line ATM simulation script in Python that manages real-time financial tracking, processes user transactions like balance checks, deposits, and withdrawals using arithmetic operations, and validates user inputs with multi-tiered conditional checks to ensure logical transaction safety.
                            </p>
                            <a href="https://github.com/Neha2474/ATM-Management" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Code
                            </a>
                        </div>
                    </div>

                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card stone py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Rock Paper Scissor</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                                Built a simple Python-based Rock-Paper-Scissors game that runs an interactive gameplay loop for two players, evaluates winning rules using conditional logic, tracks ongoing scores, and features robust input sanitization to ensure seamless user interaction.
                            </p>
                            <a href="https://github.com/Neha2474/Stone_Paper_Scissor" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Code
                            </a>
                        </div>
                    </div>
                    
                   <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card student py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Student Result Management</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                                Built a simple Python script that maps student IDs using dictionaries, generates random scores across four subjects, and calculates cumulative percentages to instantly assign letter grades and performance remarks.
                            </p>
                            <a href="https://github.com/Neha2474/Student_Result_Management/tree/main" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Code
                            </a>
                        </div>
                    </div>

                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card todolist py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Todo Application</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                                Built a responsive Todo application using Python, Django, HTML, CSS, and PostgreSQL. Implemented CRUD operations, database integration with Django ORM, and secure user interactions using Django's built-in CSRF protection.
                            </p>
                            <a href="https://todo-list-y6rs.onrender.com/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-0 p-3 rounded-5 projects">
                        <div className="grid-card weather py-5"></div>
                        <div className='my-3'>
                            <h3 className='my-4' style={{ color:'rgb(199, 230, 25)'}}>Weather App</h3>
                            <p className='mx-3' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500'}}>
                               Weather App built using Python, Django, HTML, CSS, and PostgreSQL. Integrated external weather APIs to fetch real-time data, implemented user-friendly interfaces for city-based weather queries, and ensured secure data.
                            </p>
                            <a href="https://weather-app-hmly.onrender.com/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
                        </div>
                    </div>

                </div>              
        </section>

		<section className=' text-light d-flex flex-column flex-md-row align-items-center justify-content-evenly min-vh-100 gap-4 mt-5'>
			
				<div className=' d-flex justify-content-center col-12 col-md-5 col-lg-4 pt-5'>
					<div>
						<img src={LegalTech} alt="LegalTech" style={{ width: '350px', height: '300px' }} className='pt-5' />
										
						<figcaption className="align-items-center text-center py-4"> 
							<a href="https://legal-tech-contract-parsing.onrender.com/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light my-3 px-4'>
                                View Live
                            </a>
						</figcaption>
					</div>
				</div>
				<div className=' text-center text-md-start col-12 col-md-6 px-2 px-md-4 col-lg-7' >
					<h3 className='pt-5' style={{ color: '#0ef' }}>Internship Project</h3>
					<h4 className='' style={{ color:'rgb(199, 230, 25)'}}>LegalTech – AI-Powered Contract Analyzer</h4>
					<h6 className=' text-secondary'>(Python, Django, Django REST Framework (DRF), HTML, CSS, JavaScript, SQLite, NLP, PDF Processing, PyCharm)</h6>
					<p className=' fs-6 mt-md-5' style={{textAlign:'justify', textAlignLast:'center', color:'#d3dfe1', fontWeight:'500', lineHeight:'1.8'}}>
						Reviewing lengthy legal contracts manually is time-consuming and can make it difficult to identify important terms and potentially risky clauses. To address this problem, I developed LegalTech, a web-based application using Python and Django that automates contract analysis. Users can upload PDF contracts, and the system extracts the text, generates summaries, identifies important contract details, and detects potentially risky clauses. It classifies risks into High, Medium, and Low categories and calculates an overall risk score. This helps users save time, reduce manual effort, understand contract terms more easily, and make more informed decisions before signing agreements.
					</p>
							
				</div>
			
						
				</section>
        
    </div>
  )
}

export default Projects