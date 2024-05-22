import Layout from '@/components/dashboard/admin/Layout.js';
import TopCards from "@/components/dashboard/admin/TopCards";
import BarChart from "@/components/dashboard/admin/BarChart";
import RecentOrders from "@/components/dashboard/admin/RecentOrders";

export default function Dashboard() {

  return (
    <>
      <Layout title="Dashboard">
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4 ">
          <BarChart colSpan='col-span-1 md:col-span-2' />
          <RecentOrders />
        </div>
      </Layout>
    </>
  )
}