import rew from "@/pages/api/rewiew";
import { Button, Card, Carousel } from 'react-bootstrap';

import styles from '../styles/Reviews.module.css';

export default function Reviews() {

    return (
        <div className={styles.container}>
            <Card.Title className={styles.title}><h2>TESTIMONIOS</h2></Card.Title>
            <div className={styles.reviews}>
            <Carousel>
                {rew.map((item) => (
                    <Carousel.Item key={item.id} className={styles.caro}>
                        <div className={styles.review}>
                            <div className={styles.fecha}>
                                <img src="/image/calendario.png" />
                                <h6>{item.fecha}</h6>    
                            </div>
                            <Card.Text className={styles.comment}>{item.comment}</Card.Text>
                            <Card.Title className={styles.name}>{item.name}</Card.Title>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
        </div>

    );

}
