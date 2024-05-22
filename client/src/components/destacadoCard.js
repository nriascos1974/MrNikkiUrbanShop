import styles from "../styles/DestacadoCard.module.css";
import Image from "next/image";
import Link from "next/link";

const DestacadoCard = ({ producto }) => {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Link href={`productos/${producto._id}`}>
                    <Image src={producto.images[0]} alt={producto.name} width="400" height="285"/>
                </Link>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.nameContainer}>
                    <Link href={`productos/${producto._id}`} className={styles.link}>
                        <p>{producto.name}</p>
                    </Link>
                </div>
                <p>{`$ ${producto.price}`}</p>
            </div>
            <Link href={`productos/${producto._id}`}>
                <button className={styles.buyNowButton} title="Ver Producto">
                    Ver Producto
                </button>  
            </Link>
        </div>
    )
}

export default DestacadoCard;