import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer className="mainFooter">

            <div className="footerMiddle">
                <div className="container">
                    <div className="row d-flex left">
                    
                        <div className='col-md-3 col-sm-6 d-flex flex-column'>
                            <h4>Contact</h4>
                            <ul className='list-unstyled'>
                                <li><a href="https://www.linkedin.com/in/greg-hughes-ba2aa497/">LinkedIn</a></li>
                                <li><a href="https://github.com/catman237">GitHub</a></li>
                                <li><a href="mailto: ghughes610@gmail.com">Email</a></li>
                            </ul>
                        </div>
            
                        <div className='col-md-3 col-sm-6 d-flex flex-column'>
                            <h4>Technologies</h4>
                            <ul className='list-unstyled'>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Ruby</li>
                                <li>Rails</li>
                                <li>SQL</li>
                                <li>Node.js</li>
                            </ul>
                        </div>

                        <div className='col-md-3 col-sm-6 d-flex flex-column' >
                            <h4>Full Stack
                                Projects
                            </h4>
                            <ul className='list-unstyled'>
                                <li><a href="https://github.com/catman237/plumbers-helper-frontend">A Plumbers Friend (Frontend)</a></li>
                                <li><a href="https://github.com/catman237/plumbers-helper-backend">A Plumbers Friend (Backend)</a></li>
                                <li><a href="https://github.com/catman237/job_posting_frontend">Flatirons Job Board (Frontend)</a></li>
                                <li><a href="https://github.com/catman237/job_posting_backend">Flatirons Job Board (Backend)</a></li>
                            </ul>
                        </div>

                    </div>
             
                    <div className="footerBottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} a plumbers friend app
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.footer` 

.footerMiddle {
    background-color: var(--mainDark);
    padding-top: 1rem;
    color: var(--white);
}

.footerBottom {
    padding-top: 1rem;
    padding-bottom: .5rem;
}

ul li a {
    color: var(--mainLightGrey);
}

ul li a:hover {
    color: var(--white);
}
`;