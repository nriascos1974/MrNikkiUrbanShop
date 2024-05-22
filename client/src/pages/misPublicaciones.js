import style from "@/styles/misPublicaciones.module.css";
import Layout from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function misPedidos() {
  return (
    <>
      <Layout title="mis publicaciones">
        <div className={style.listContainer}>
          <h1 className={style.title}>Mis Publicaciones</h1>

          {/* card producto */}
          <div className={style.container}>
            <p className={style.fecha}><span>Fecha:</span> 10 de mayo</p>
            <div className={style.listItem}>
              <Image className={style.imageProduct} src="/image/products/p4_2.png" width={100} height={100} alt="ropa" />
              <div className={style.listItemInfo}>
                <p className={style.status}>Activa</p>
                <p className={style.fechaEntrega}>#1234567</p>
                <p className={style.nameProduct}>Iphone 12 como nuevo</p>
                <p className={style.fechaEntrega}>0 visitas || 0 ventas || finaliza en 50 días</p>
              </div>
            <button className={style.buttonShop}>Finalizar publicación</button>
            <button className={style.buttonShop}>Editar publicación</button>
            </div>
          </div>
          {/* endCard */}
          <div className={style.container}>
            <p className={style.fecha}><span>Fecha:</span> 10 de mayo</p>
            <div className={style.listItem}>
              <Image className={style.imageProduct} src="/image/products/p4_2.png" width={100} height={100} alt="ropa" />
              <div className={style.listItemInfo}>
                <p className={style.status}>Activa</p>
                <p className={style.fechaEntrega}>#1234567</p>
                <p className={style.nameProduct}>Iphone 12 como nuevo</p>
                <p className={style.fechaEntrega}>0 visitas || 0 ventas || finaliza en 50 días</p>
              </div>
            <button className={style.buttonShop}>Finalizar publicación</button>
            <button className={style.buttonShop}>Editar publicación</button>
            </div>
          </div>
          


        </div>
        
      </Layout>

    </>
  )
}