import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Form() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        setStatus('Sending...');

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            'access_key',
            '33a8c29a-edfb-42de-9329-fb0c7f0c61cc'
        );

        formData.append(
            'subject',
            'New Portfolio Contact Message'
        );

        try {
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('Message sent successfully!');
                form.reset();
            } else {
                setStatus(
                    result.message ||
                    'Unable to send your message. Please try again.'
                );
            }
        } catch {
            setStatus(
                'Something went wrong. Please check your internet and try again.'
            );
        }
    };

    return (
        <div className='back' id='contact'>
            <section className=' align-items-center text-light text-center min-vh-100'>
                <form onSubmit={handleSubmit} className=" py-5 w-100 w-md-75 w-lg-50 text-center px-3">
                    
                    <h1 className="my-5 fs-2 fs-md-1">
                        <span style={{ color: '#0ef' }}>Get in Touch</span>
                    </h1>

                    <div className="mx-auto" style={{ maxWidth: '450px' }}>

                        <input type="text" name="name" placeholder="Name" aria-label="Name" className="form-control my-3" style={{background: 'transparent', color: 'rgb(192, 237, 243)'}} required/>

                        <input type="email" name="email" placeholder="Email" aria-label="Email" className="form-control my-3" style={{background: 'transparent',color: 'rgb(192, 237, 243)'}} required/>

                        <textarea name="message" placeholder="Message" aria-label="Message" rows="4" className="form-control my-3" style={{background: 'transparent', color: 'rgb(192, 237, 243)', resize: 'none',}}required/>

                        <button type="submit" className="btn btn-primary my-3 w-100 fw-semibold" disabled={status === 'Sending...'}>
                            {status === 'Sending...' ? 'Sending...' : 'Submit'}
                        </button>

                        {status && (<p role="status" aria-live="polite">{status}</p>)}
                        
                        <div className="d-flex justify-content-center mt-4 mb-0 gap-3">
                            <a href="https://github.com/Neha2474" target="_blank" rel="noopener noreferrer" className='icons'><FontAwesomeIcon icon={faGithub} /></a>

                            <a href=" https://www.linkedin.com/in/neha-thosar-0a3ba3227  " target="_blank" rel="noopener noreferrer" className='icons'><FontAwesomeIcon icon={faLinkedin} /></a>

                            <a href="mailto:nehathosar24@gmail.com" className='icons'><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </form>
                
            </section>
        </div>
    );
}

export default Form;