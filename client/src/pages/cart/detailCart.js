import style from "../../styles/cart/car.module.css";
import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import ProductoCard from "../../components/cart/productCart";
import { useDispatch, useSelector } from "react-redux";
import notFound from "../../../public/image/NotFound.png";
import { deleteProducts } from "@/redux/features/carrito/carrito";

export default function car() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.user?.user?.shoppingCart);
  const _idUser = useSelector((state) => state.user?.user?._id);
  let totalPrice = null;

  //agregar al carrito

  const DeleteShoppingCart = (_id, size) => {
    const itemDelete = { _id, _idUser, size };
    dispatch(deleteProducts(itemDelete));
  };

  return (
    <>
      {shoppingCart?.products?.length > 0 ? (
        <Layout>
          <div className={style.container}>
            <p className={style.titleCart}>Carrito de compras</p>
            <hr />

            {shoppingCart?.products.length > 0 &&
              shoppingCart.products.map((item) => {
                const { _id, name, images, price } = item.product;

                totalPrice = price * item.ammount;

                return (
                  <ProductoCard
                    _id={_id}
                    name={name}
                    images={images}
                    price={price}
                    ammount={item.ammount}
                    total={totalPrice}
                    DeleteShoppingCart={DeleteShoppingCart}
                    size={item.size}
                  />
                );
              })}
            <div className={style.buttons}>
              <Link href="/">
                <button className={style.buttonCancel}>Cancelar</button>
              </Link>
              <Link href="/cart/shipmentCart">
                <button className={style.buttonContinue}>Continuar</button>
              </Link>
            </div>
          </div>
        </Layout>
      ) : (
        //carrito vacio
        <Layout>
          <div className={style.container}>
            <p className={style.titleCart}>Carrito de compras</p>
            <hr />
            <Image src={notFound} />
            <div className={style.buttons}>
              <Link href="/productos">
                <button className={style.buttonCancel}>
                  Agregar productos
                </button>
              </Link>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}
