import styles from "../styles/Carrito.module.css";
import react from 'react';
import EnConstruccion from './enConstruccion';

const Carrito = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Carrito de Compras</h2>
            <EnConstruccion />
        </div>
    )
};

export default Carrito;
