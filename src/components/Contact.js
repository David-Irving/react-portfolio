import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/emailsvg.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";



export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_iu9mljm', 'template_cn303x4', form.current, 'lDPctyTpUw5OU0dUr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };





    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate_animated animate_zoomIn" : ""} src={contactImg} alt="Contact Me"/>
                        }
                        </TrackVisibility>
                    </Col>
            <Col size={12} md={6}>
                <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                            <h2>Contact Me</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <label>Name</label>
                                        <input type="text" name="user_name" />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <label>Email</label>
                                        <input type="email" name="user_email" />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <label>Message</label>
                                        <textarea rows="6" name="message" />     
                                        <input type="submit" value="Send" />
                                    </Col>
                                </Row>
                            </form>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
    )
                      };