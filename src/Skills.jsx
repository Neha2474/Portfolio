import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SiJavascript,SiPython, SiPostgresql,SiBootstrap, SiMysql, SiHtml5, SiDjango   } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaCss3Alt  } from "react-icons/fa";
import PgAdmin4 from './assets/PgAdmin4.jpg'
import VSCode from './assets/VSCode.png'
import PyCharm from './assets/PyCharm.jpg'
import Postman from './assets/postman.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <div className="back" id="skills">
             <section className='container text-white text-center'>
                <h2 className='p-5'>Skills</h2>
                <h3 className='pb-3' style={{ color: '#0ef' }}>Technical Proficiencies</h3>
                
                <div className="container text-center mb-5 ">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-6">
                        <div className="col m-3 tools skill-icon"><SiHtml5 size={60} style={{ color: '#E34F26', fill: '#E34F26' }} /></div>
                        <div className="col m-3 tools skill-icon"><FaCss3Alt size={60} style={{ color: '#1572B6', fill: '#1572B6' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiJavascript size={50} style={{ color: '#F7DF1E', fill: '#F7DF1E' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiBootstrap size={60} style={{ color: '#7952B3', fill: '#7952B3' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiReact size={60} style={{ color: '#61DAFB', fill: '#61DAFB' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiPython size={60} style={{ color: '#3776AB', fill: '#3776AB' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiMysql size={60} style={{ color: '#4479A1', fill: '#4479A1' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiPostgresql size={60} style={{ color: '#4169E1', fill: '#4169E1' }} /></div>
                        <div className="col m-3 tools skill-icon"><SiDjango size={60} style={{ color: '#2caa79', fill: '#21bb80' }} /></div>
                    </div> 
                </div>

               

                <h3 className='mt-5' style={{ color: '#0ef' }}>Development Tools</h3>
                
                <div className="container text-center ">
                    <div className="d-flex row row-cols-1 row-cols-sm-3 row-cols-md-6" style={{alignItems:"center"}}>
                        <div className="col m-3 ">
                            <img src={VSCode} alt="VSCode" style={{ width: '160px', height: '90px' }} className="vscode tools" />
                        </div>
                        <div className="col m-3 ">
                            <img src={PyCharm} alt="PyCharm" style={{ width: '100px', height: '90px' }} className="vscode tools" />
                        </div>
                        <div className="col m-4">
                            <FontAwesomeIcon icon={faGithub} style={{fontSize:"60px"}} className="tools" />
                        </div>
                        <div className="col m-3">
                            <img src={PgAdmin4} alt="PgAdmin4" style={{ width: '90px', height: '70px' }} className="pgadmin tools" />
                        </div>
                        <div className="col " >
                            <img src={Postman} alt="Postman" style={{width: '130px', height: '120px'}} className="postman tools"/>
                        </div>
                    </div> 
                </div>




                <h3 className='mt-5' style={{ color: '#0ef' }}>Soft Proficiencies</h3>
                <div className='soft-proficiencies d-flex row justify-content-center text-white table-responsive'>
                    <table className='table my-5 w-75' style={{ '--bs-table-bg': 'transparent', '--bs-table-color': '#fff' }}>
                        <tbody>
                            <tr style={{ borderBottom: 'transparent' }}>
                                <td className="align-middle "><b>Communication</b></td>
                                <td className="align-middle" style={{ width: '50%' }}>
                                    <div className="progress border-0" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                        <div className="progress-bar text-bg-success" style={{ width: '100%' }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: 'transparent' }}>
                                <td className="align-middle td"><b>Teamwork</b></td>
                                <td className="align-middle" style={{ width: '50%' }}>
                                    <div className="progress border-0" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                        <div className="progress-bar text-bg-success" style={{ width: '90%' }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: 'transparent' }}>
                                <td className="align-middle"><b>Problem Solving</b></td>
                                <td className="align-middle" style={{ width: '50%' }}>
                                    <div className="progress border-0" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                        <div className="progress-bar text-bg-success" style={{ width: '85%' }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: 'transparent' }}>
                                <td className="align-middle"><b>Active Listening</b></td>
                                <td className="align-middle" style={{ width: '50%' }}>
                                    <div className="progress border-0" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                        <div className="progress-bar text-bg-success" style={{ width: '85%' }}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Skills