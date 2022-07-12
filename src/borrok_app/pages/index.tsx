import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../libs/axios'
import Layout from '../components/layout'
import NewBook from '../components/bookList/new_book_list'
import LendBook from '../components/bookList/lend_book_list'
import StockBook from '../components/bookList/stock_book_list'
import Borrow from '../components/bookList/borrow'
import Ranking from '../components/bookList/lend_ranking'

const Top: NextPage = () => {
  const { data } = useSWR('/api/user', () =>
    axios
        .post('/api/user', {
          id: 1,
        })
        .then((res: any) => res.data)
    )

    if (!data) {
      return (
        <Layout title = "borrok">
          <div className = "d-flex align-items-center justify-content-center" style = {{height: 500}}>
            <div className = "text-center">
              <div className = "spinner-border text-primary" role = "status"></div>
              <div>
              <h2 className = "mt-2">Loading...</h2>
              </div>
            </div>
          </div>
        </Layout>
      )
    }

  if (data) {
    return (
      <Layout title = "borrok">
        <div className = "container">
          <div className = "pt-4">
            <h2>ようこそ<span className = "text-primary">{data.name}</span>さん</h2>
          </div>
          <Borrow title = "現在借りている本" />
          <NewBook title = "新冊"/>
          <LendBook title = "貸出中"/>
          <StockBook title = "貸出可"/>
          <Ranking title = "貸出数ランキング"/>
        </div>
      </Layout>
    )
  }
}

export default Top