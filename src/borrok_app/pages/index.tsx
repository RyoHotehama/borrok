import type { NextPage } from 'next'
import Layout from '../components/layout'
import NewBook from '../components/bookList/new_book_list'
import LendBook from '../components/bookList/lend_book_list'
import StockBook from '../components/bookList/stock_book_list'
import Borrow from '../components/bookList/borrow'

const Top: NextPage = () => {
  return (
    <Layout title = "borrok">
      <div className = "container">
        <div className = "pt-4">
          <h2>ようこそ<span className = "text-primary">匿名</span>さん</h2>
        </div>
        <Borrow title = "現在借りている本" />
        <NewBook title = "新冊"/>
        <LendBook title = "貸出中"/>
        <StockBook title = "貸出可"/>
        <NewBook title = "貸出数ランキング"/>
      </div>
    </Layout>
  )
}

export default Top