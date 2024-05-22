import style from "../styles/boletin.module.css"
import Image from 'next/image'

export default function boletin(){

    return (
        <div className= {style.container}>

            <div className={style.titleBoletin}>
                <h3>Suscribete a nuestro boletín de noticias</h3>
                <Image className={style.img} src="/boletin.png" alt="boletin" width={30} height={30} />
            </div>
            <p>Suscribete a nuestro boletín si quieres saber sobre nuestros productos, promociones y mucho más.</p>

            <div>
                <form className={style.formBoletin}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="nombre"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="email@gmail.com"/>

                        <button className={style.buttonSubmit} type="submit">Suscribete</button>

                </form>

                    
            </div>

        </div>
    )
}