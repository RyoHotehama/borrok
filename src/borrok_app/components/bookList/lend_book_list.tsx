import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../../libs/axios'
import Image from 'next/image'
import Link from 'next/link'

const Card: NextPage = (props) => {
  if (props.data) {
    const card = props.data.LEND_BOOK_DATA.map((value, key) => (
      <div className = "col-so-4 card-wrap" key = {key}>
        <Link href = {{ pathname: '/book/detail/[id]', query: { id: value.book_id }}} passHref>
          <a className = "stretched-link"></a>
        </Link>
        <div className = "card bg-light" style = {{maxWidth: '25rem'}}>
          <Image src = "/image/logo.png" className = "card-img-top border-bottom" width = {200} height = {200}/>
          <div className = "card-body bg-white">
            <h4 className = "card-title text-nowrap">{value.title}</h4>
            <mark>{value.book_tag}</mark>
          </div>
        </div>
      </div>
    ))

    return (
    <div className = "row pt-3 pb-5">
      {card}
    </div>
    )
  }
}

const LendBook: NextPage = (props) => {
  const { data, error } = useSWR('/api/lend/book', () =>
    axios
        .get('/api/lend/book')
        .then((res: any) => res.data)
    )
  if (data) {
    return (
      <div className = "container">
        <div className = "pt-5">
          <div className = "border-bottom border-warning">
            <h3>{props.title}</h3>
          </div>
            <Card data = {data}/>
        </div>
      </div>
    )
  }
}
export default LendBook