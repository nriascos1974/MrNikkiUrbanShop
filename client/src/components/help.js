import styles from '../styles/Help.module.css';
import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Link from 'next/link';

const Help = () => {
    return (
      <Container className={styles.container}>
        <Row className="mt-5">
          <Col>
            <h2 className={styles.title}>Ayuda</h2>
          </Col>
        </Row>
  
        {/* Sección Preguntas Frecuentes */}
        <Row className="mt-5">
          <Col>
            <h3>Preguntas Frecuentes</h3>
            <Accordion>
              {/* Reemplaza los datos de ejemplo con las preguntas y respuestas reales */}
              {[
                { question: 'Pregunta 1', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { question: 'Pregunta 2', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { question: 'Pregunta 3', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { question: 'Pregunta 4', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { question: 'Pregunta 5', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { question: 'Pregunta 6', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
              ].map((faq, index) => (
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
  
        {/* Sección Contacto */}
        <Row className="mt-5">
          <Col>
            <h3>Contacto</h3>
            <p>
              Si no encuentras la respuesta a tu pregunta en nuestras Preguntas Frecuentes, por favor, no dudes en contactarnos.
            </p>
            <p>
              Email: <a href="mailto:soporte@marketplace.com">soporte@marketplace.com</a>
            </p>
            <p>
              Teléfono: +1 (123) 456-7890
            </p>
          </Col>
        </Row>
      </Container>
    );
};
  
export default Help;