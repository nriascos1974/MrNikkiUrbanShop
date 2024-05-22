import Layout from '@/components/dashboard/admin/Layout.js';
import UsersList from "@/components/dashboard/admin/UsersList";

export default function Usuarios() {

  return (
    <>
      <Layout title="Usuarios">
        <UsersList />
      </Layout>
    </>
  )
}