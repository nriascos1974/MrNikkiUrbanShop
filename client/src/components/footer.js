import style from '../styles/Footer.module.css';


export default function Footer(){

    return (
        <div className={style.container}>
            <div>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <img src='/image/footer/carrito.png' alt="" />
                        <div className={style.div3}>
                            <h2>DOMICILIO GRATIS</h2>
                            <p>Envío gratis en todos los pedidos de bogotá o pedidos superiores a $ 100</p>
                        </div>
                    </div>
                    
                </div>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <img src='/image/footer/reload.png' alt="" />
                        <div className={style.div3}>
                            <h2>30 DÍAS PARA DEVOLVER</h2>
                            <p>Simplemente devuélvalo dentro de los 30 días para un cambio.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <img src='/image/footer/mercado.png' alt="" />
                        <div className={style.div3}>
                            <h2>MEDIOS DE PAGO</h2>
                            <p>Pagos realizados a través de mercadopago</p>
                        </div>
                    </div>
                </div>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <img src='/image/footer/cartera.png' alt="" />
                        <div className={style.div3}>
                            <h2>100% DEVOLUCION DE DINERO</h2>
                            <p>Garantizamos el pago seguro con Bancolombia</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}