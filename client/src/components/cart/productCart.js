import style from "../../styles/cart/car.module.css";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { BsTrashFill } from "react-icons/bs";

export default function productCart(props) {
  const { images, name, price, ammount, total, _id, DeleteShoppingCart, size } =
    props;

  return (
    <>
      <div className={style.products}>
        <div>
          <BsTrashFill
            className={style.emoji}
            onClick={() => DeleteShoppingCart(_id, size)}
          />
        </div>
        <Image
          className={style.productImage}
          src={images[0]}
          width={100}
          height={100}
        />
        <div className={style.productInfo}>
          <div className={style.productDetail}>
            <p>{`${name.slice(0, 10)}...`}</p>
            <p>{`$ ${price}`}</p>
            <p>{`Talla: ${size}`}</p>
            <p>{`Cant: ${ammount}`}</p>
          </div>
        </div>
        <div className={style.totalProduct}>
          <p>{`$ ${total}`}</p>
        </div>
      </div>
    </>
  );
}
