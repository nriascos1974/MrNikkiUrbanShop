import style from "../styles/NavBar.module.css";
import Image from "next/image";
import SearchBar from "./searchbar";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../public/logo.png";
import menu from "../../public/image/menu.png";
import user from "../../public/image/user.png";
import cart from "../../public/image/cart.png";
import { openMenu } from "@/redux/features/menu/menuSlice";
import { useEffect } from "react";

export default function NavBar() {
  const { isOpen } = useSelector((state) => state.menu);
  const userState = useSelector((state) => state.user);

  const shoppingCart = useSelector(
    (state) => state.user.user?.shoppingCart?.products
  );

  const dispatch = useDispatch();

  const handlerOpenMenu = () => {
    dispatch(openMenu());
  };

  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <Link href={"/"}>
          <Image priority src={logo} alt="logo" width="340" height="340" />
        </Link>
      </div>

      <div className={style.menu} onClick={handlerOpenMenu}>
        <Image priority src={menu} alt="logo" width="30" height="30" />
      </div>

      <div className={style.navigation}>
        <div>
          <SearchBar />
        </div>
        {!isOpen && (
          <div className={style.links}>
            <Link href="/nosotros" className={style.link}>
              <button className={style.btn}>Nosotros</button>
            </Link>
            <Link href="/productos" className={style.link}>
              <button className={style.btn}>Productos</button>
            </Link>
            {userState.user?.role?.role === "vendedor" &&
              (!userState.user ? (
                <Link href="/login" className={style.link}>
                  <button className={style.btn}>Vender</button>
                </Link>
              ) : (
                <Link href="/sellProduct" className={style.link}>
                  <button className={style.btn}>Vender</button>
                </Link>
              ))}
            {/* <Link href="/faqs" className={style.link}>
              <button className={style.btn}>¿Necesitas ayuda?</button>
            </Link> */}
            {userState.user?.role?.role === "admin" && (
              <Link href="/dashboard/admin" className={style.link}>
                <button className={style.btn}>Admin Panel</button>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className={style.user}>
        {!isOpen &&
          (!userState.user ? (
            <div className={style.userPerfil}>
              <button className={style.red}>
                <Link href="/login">
                  <Image
                    priority
                    src={user}
                    alt="user"
                    width="35"
                    height="35"
                  />
                </Link>
              </button>
            </div>
          ) : (
            <div className={style.userPerfil}>
              <button className={style.red}>
                <Link href="/profileUser">
                  <Image
                    priority
                    src={user}
                    alt="user"
                    width="35"
                    height="35"
                  />
                </Link>
              </button>
              <h6>{userState.user.firstname}!</h6>
            </div>
          ))}
        <div className={style.shoppingCart}>
          <button>
            <Link href="/cart/detailCart">
              <Image priority src={cart} alt="cart" width="35" height="35" />
            </Link>
          </button>

          {shoppingCart && shoppingCart.length > 0 ? (
            <p>{shoppingCart.length}</p>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
