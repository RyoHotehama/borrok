import type { NextPage } from 'next'
import Layout from '../../components/admin/layout'
import Lend from '../../components/admin/lend_book_list'

const Admin: NextPage = () => {
  return (
    <Layout title = "borrok">
      <div className = "container">
        <div className = "pt-4">
          <h2>管理画面</h2>
        </div>
        <div>
          <Lend />
        </div>
      </div>
    </Layout>
  )
}

export default Admin