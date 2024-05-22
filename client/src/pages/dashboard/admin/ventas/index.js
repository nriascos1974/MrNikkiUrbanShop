import Layout from '@/components/dashboard/admin/Layout.js';
import OrdersList from "@/components/dashboard/admin/OrdersList";

export default function Ventas() {

  return (
    <>
      <Layout title="Ventas">
        <OrdersList />
      </Layout>
    </>
  )
}