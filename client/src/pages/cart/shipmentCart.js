
import Layout from "../../components/layout";
import Link from "next/link";
import style from "../../styles/cart/envio.module.css";
import { GrMapLocation } from 'react-icons/gr';
import {payment} from "@/redux/features/payment/payment";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";


export default function car() {

  const dispatch = useDispatch();
  const paymentUrl = useSelector(state=> state.payment.paymentUrl);
  const paymentStatus = useSelector(state=> state.payment.status);
  const user = useSelector(state=> state.user?.user);
  const userProducts = useSelector(state=> state.user?.user?.shoppingCart?.products);
  let total = 0;
  let totalProducts = 0;

  // const [productsTotal,setProductsTotal] = useState({
  //   total: 0,
  //   ammount: "",
  // })  

  

  const handlePayment = ()=>{

    //enviar productos
     dispatch(payment())
  }

  useEffect(() => {
    if (paymentUrl && paymentStatus === 'succeeded') {
      window.location.href = paymentUrl; // Redirecciona a la URL de pago en la misma pantalla
    }
  }, [paymentUrl, paymentStatus]);



  return (
    <>
      <Layout>
            <p className={style.titleCart}>Información de envío</p>
            
            <div className={style.container}>
                <GrMapLocation className={style.imageEnvio}/>
                <div className="direccion">
                    {/* <p>Av. Siempre Viva 123</p> */}
                    {/* <p>Springfield, USA</p> */}
          
                    <p>{user?.address ? user?.address: null}</p>

                    <p>{user?.city?.city} {user?.city?.department?.department}</p>
                </div>
                {/* <button className={style.buttonEdit}>Editar o Elegir otra</button> */}
            </div> 
            
            {userProducts?.map(product=>{
              const {ammount} = product;
              const {price} = product.product;
              total += ammount * price;
              totalProducts += ammount;
            })}

            <div className={style.resumenCompra}>
                <p>Resumen compra</p>
                <h4>{""}</h4>
                <p>Total: ${total}</p>
                <p><span>Productos</span>({totalProducts})</p>
            </div>

            <Link href="">
                    <button className={style.buttonContinue} onClick={handlePayment}>Continuar</button>
            </Link>
     
      </Layout>
    </>
)}