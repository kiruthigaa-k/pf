import React, { useState } from 'react'
import "./projects.css";
const Projects = () => {
    const [toggleState,setToggleState]=useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
        <section className="services section" id="services">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Major projects.</span>

            <div className="services__container containet grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">KM portal</h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(1)}>View More
                     <i className="uil uil-arrow-right services__button-icon"></i></span>
                     <div className={toggleState==1 ?"services__modal active-modal":"services__modal"}>
                        <div className="service__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Knowledge Management Portal</h3>
                            <p className="services__modal-description">
                    
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className="services__modal-info">
                                        A full-stack application using Django framework
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className="services__modal-info">
                                       Front-end: html,css ; Backend:Python ;Database:SQlite-3.
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                     </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Blog Website</h3>
                    </div>

                    <span onClick={()=> toggleTab(2)} className="services__button" >View More
                     <i className="uil uil-arrow-right services__button-icon"></i></span>
                     <div className={toggleState==2 ?"services__modal active-modal":"services__modal"}>
                        <div className="servicse__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Blog Management</h3>
                            <p className="services__modal-description">
                                
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className="services__modal-info">
                                        Developed blog application using React-js,React Hooks,Bootstrap,REST API,
                                        Firebase.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className="services__modal-info">
                                    The user can read any blogs related to news.
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                     </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Todo-List</h3>
                    </div>

                    <span onClick={()=> toggleTab(3)}  className="services__button"  >View More
                     <i className="uil uil-arrow-right services__button-icon"></i></span>
                     <div className={toggleState==3 ?"services__modal active-modal":"services__modal"}>
                        <div className="servicse__modal-content">
                            <i  onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Todo -List</h3>
                            <p className="services__modal-description">
                                
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className="services__modal-info">
                                       Developed a Todo-list application, where user can 
                                       make their own Todo-list.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className="services__modal-info">
                                        Front-end: HTML,CSS,JavaScript.
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
        </section>
  )
}

export default Projects