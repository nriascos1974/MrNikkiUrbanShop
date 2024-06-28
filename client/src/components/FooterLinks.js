import React from "react";
import styles from "../styles/FooterLinks.module.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className={styles.container}>
      <hr style={{ width: "96%", borderTop: "1px solid #9362D3" }} />

      <div className={styles.rigth_icons}>
        {/* derechos reservados */}
        <div className={styles.rigth}>
          <p>
            © <strong>Mela BrandShop</strong>, Marketplace filial de{" "}
            <strong>Estampados Rionegro</strong>, Rionegro-Antioquia 2024.
          </p>
          
        </div>

        {/* iconos redes sociales */}
        <div className={styles.icons}>
          <Link href={"https://www.instagram.com/estampados_rionegro/"}>
            <FaInstagram />
          </Link>
          <Link href={"https://www.facebook.com/estampados.rionegrolatienda.355/"}>
          <FaFacebookSquare />
          </Link>
        </div>
      </div>
    </div>
  );
}
