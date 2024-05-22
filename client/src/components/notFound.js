import style from '../styles/NotFound.module.css';


export default function NotFound() {

    return (
        <div className={style.container}>
            <img src='/image/NotFound.png'  alt=''/>
            <h2>No se encontró ningún producto</h2>
        </div>
    )
}