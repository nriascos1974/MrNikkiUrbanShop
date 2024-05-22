import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import Login from '@/pages/login';
import EnConstruccion from '@/components/enConstruccion';
import Slider from '@/components/slider';
import Destacados from "@/components/destacados";
import Boletin from '@/components/boletin';
import Reviews from '@/components/reviews';
import { autoLoginUser } from "@/redux/features/auth/authSlice";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';




export default function Home() {

  return (
    <>
      <Layout title="Home">
        <Slider />
        <Destacados />
        <Reviews/>
        <Boletin />
      </Layout>
    </>
  )
}
