import style from "@/styles/productDetail.module.css";
import Image from "next/image";
import { Carousel, CarouselItem } from "react-bootstrap";
import Layout from "@/components/layout";
import NotFound from "@/components/notFound";
import React, { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { fetchProductDetailAsync, fetchProductSellerAsync ,setDetail } from "@/redux/features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendProducts, addProduct } from "@/redux/features/carrito/carrito";
import Link from "next/link";

function producto() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { productDetail } = useSelector(state => state.products);
  const shoppingCart =  useSelector(state => state.shoppingCart.products);
  

  const { id } = router.query;

    const [product,setProduct] = useState({
      id:'',
      name:'',
      price:'',
      amount: '1'
    })


    useEffect(() => {
        dispatch(fetchProductDetailAsync(id));

        return () => {
          dispatch(setDetail())
        }
    }, [dispatch, id]);

    /*------------Traer informacion del vendedor del producto------------*/
    useEffect(() => {
      dispatch(fetchProductSellerAsync(id));
    },[])


    /*-------------------------------------------------------------------*/

    // datos del producto
    useEffect(() => {
    if (productDetail && productDetail.name) {
      setProduct({
        ...product,
        id:productDetail._id,
        name:productDetail.name,
        price:productDetail.price,
      })
   
    }
  }, [productDetail]);

  //catidad del producto
  const handleProductAmount = (event)=>{
    const amountProduct = event.target.value
    setProduct({
      ...product,
      amount:amountProduct
    })
  }

  //agregar al carrito
  const handleAddShoppingCart = (event)=>{
    event.preventDefault()
    dispatch(sendProducts(product))
  }


  return (
    <Layout>
      {
        productDetail && productDetail.name ? (
          <div className={style.containerDetail}>
            <div className={style.main}>
              <h2  className={style.detailTitle}>{ productDetail.name }</h2>
              
              <div className={style.informationProduct}>
                <div className={style.imagesContainer}>
                  <Carousel className={style.carousel}>
                    {
                      productDetail.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <Image className= {style.imageProduct} priority src={image} alt={productDetail.name} width="500" height="500"/>
                        </CarouselItem>
                      ))
                    }
                  </Carousel>
                </div>
                <div className={style.infoProduct}>
                    <h3 className={style.productTitle}>{productDetail.name}</h3>

                    <div className={style.price}>
                      <h4>{`$ ${productDetail.price}`}</h4>
                      <button className={style.priceButton} title="Haz una oferta al vendedor">Ofertar</button>
                    </div>

                    <p className={style.gastoEnvio}>Gastos de envío calculados al momento de realizar tu compra.</p>

                    <div className={style.informationAditional}>
                      <div className={style.containerInfo}>
                        <Image className= {style.truck} priority src="/image/truck.png" alt="truck" width="20" height="20"/>
                        <p>Envío:</p>
                        <p><span>NACIONAL</span></p>
                      </div>
                      <div className={style.containerInfo}>
                        <Image className= {style.truck} priority src="/image/devolucion.png" alt="devolucion" width="20" height="20"/>
                        <p>Devolución:</p>
                        <p><span>GRATIS</span></p>
                      </div>
                      <div className={style.containerInfo}>
                        <Image className= {style.truck} priority src="/image/garantia.png" alt="garantia" width="20" height="20"/>
                        <p>Garantía:</p>
                        <p><span>6 MESES</span></p>
                      </div>
                    </div>
                    
                    <p className={style.infoEnvio}>Puedes recibir tu pedido al día siguiente de tu compra. Conoce el tiempo exacto, una vez confirmes la dirección de entrega.</p>

                    <div className={style.stockInfo}>
                      <p>Stock: <span>Disponible</span></p>
                      <div className={style.stock}>
                        <label>Cantidad</label>
                        <input type="number" min="1" max={productDetail.stock} placeholder="1" onChange={handleProductAmount}/>
                      </div>
                      <p>Unidades disponibles: <span>{productDetail.stock}</span></p>
                      <p>Información del vendedor  <button><Link className={style.infoSeller} href='/profileSeller'>ℹ️</Link></button></p>
                    </div>

                    <div className={style.buttons}>
                      <button className={style.buttonAdd} onClick={handleAddShoppingCart}>Agregar al carrito</button>
                    </div>
                </div>
              </div>

              <div className={style.descriptionSection}>
                <h3 className={style.detailTitle}>Descripción del producto</h3>
                <div className={style.descriptionProduct}>
                  <p>{productDetail.description}</p>
                </div>
              </div>

              <div className={style.questionsSection}>
                <h3 className={style.detailTitle}>Preguntas y respuestas</h3>
                <div className={style.containerPregunta}>
                  <h4>Pregúntale al vendedor</h4>
                  <textarea name="pregunta" id="pregunta" rows="1" placeholder="Escribe tu pregunta"></textarea>
                  <button className={style.buttonAsk}>Preguntar</button>
                </div>

                <div className={style.containerPregResp}>
                  <h4>Últimas realizadas</h4>
                  <div className={style.ask}>
                    <span>¿El producto es nuevo?</span>
                    <p>Si, el producto es nuevo</p>
                  </div>
                  <div className={style.ask}>
                    <span>¿Aceptas pagos por MercadoPago?</span>
                    <p>Sí, aceptamos pagos por MercadoPago.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) 
        : // Si no hay producto, mostrar el componente NotFound
        (
          <NotFound />
        )
      }
    </Layout>
  )
}

export default producto;


