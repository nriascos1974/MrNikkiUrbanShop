// pages/resultadocompra.js
import style from "../../styles/cart/envio.module.css";
import Layout from "../../components/layout";
import Link from "next/link";
import { useEffect } from "react";
import { paymentmercadopago } from "@/redux/features/payment/payment";
import { useDispatch } from "react-redux";
import { autoLoginUser } from "@/redux/features/auth/authSlice";

export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: {
      params: query,
    },
  };
}

const ResultadoCompra = ({ params }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.status === "approved") {
      const estadoCompra = {
        payment_id: params.payment_id,
        status: params.status,
      };
      dispatch(paymentmercadopago(estadoCompra));
      dispatch(autoLoginUser());
    }
  }, [params.payment_id]);

  return (
    <>
      <Layout>
        <p className={style.titleCart}>Transacción</p>
        <div className={style.resumenCompra}>
          <h4>{""}</h4>
          <p>Estado: {params.status}</p>
          <p>Medio Pago: {params.payment_type}</p>
          <p>Orden ID: {params.merchant_order_id}</p>
          <p>Pago ID: {params.payment_id}</p>
        </div>
        p
        <Link href="/">
          <button className={style.buttonContinue}>Aceptar</button>
        </Link>
      </Layout>
    </>
  );
};

export default ResultadoCompra;
