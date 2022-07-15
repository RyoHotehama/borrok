import type { NextPage } from 'next'
import Layout from '../components/layout'

const Error503: NextPage = () => {
  return (
    <Layout title = "borrok">
      <div className = "container d-flex align-items-center justify-content-center mt-3" style = {{height: 500}}>
        <div>
          <h4>ただいま混み合っています</h4>
          <h5>再度ログインし直してください</h5>
          <p>ログイン画面へ</p>
        </div>
      </div>
    </Layout>
  )
}
export default Error503