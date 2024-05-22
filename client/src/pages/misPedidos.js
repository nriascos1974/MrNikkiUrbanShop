import style from "@/styles/misPedidos.module.css";
import Layout from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function misPedidos() {
  return (
    <>
      <Layout title="mis pedidos">
        <div className={style.listContainer}>
          <h1 className={style.title}>Mis Pedidos</h1>

          {/* card producto */}
          <div className={style.container}>
            <p className={style.fecha}><span>Fecha:</span> 10 de mayo</p>
            <div className={style.listItem}>
              <Image className={style.imageProduct} src="/image/products/p4_2.png" width={100} height={100} alt="ropa" />
              <div className={style.listItemInfo}>
                <p className={style.status}>En preparación</p>
                <p className={style.fechaEntrega}>Llega el jueves 18 de mayo</p>
                <p className={style.nameProduct}>Iphone 12 como nuevo</p>
                <p className={style.vendedor}><span>Vendedor:</span> Pablo Hernández</p>
              </div>
            <button className={style.buttonShop}>Ver compra</button>
            </div>
          </div>
          {/* endCard */}
          {/* card producto */}
          <div className={style.container}>
            <p className={style.fecha}><span>Fecha:</span> 10 de mayo</p>
            <div className={style.listItem}>
              <Image className={style.imageProduct} src="/image/products/p4_2.png" width={100} height={100} alt="ropa" />
              <div className={style.listItemInfo}>
                <p className={style.status}>En preparación</p>
                <p className={style.fechaEntrega}>Llega el jueves 18 de mayo</p>
                <p className={style.nameProduct}>Iphone 12 como nuevo</p>
                <p className={style.vendedor}><span>Vendedor:</span> Pablo Hernández</p>
              </div>
            <button className={style.buttonShop}>Ver compra</button>
            </div>
          </div>
          {/* endCard */}


        </div>
        
      </Layout>

    </>
  )
}