import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../../libs/axios'
import Image from 'next/image'
import Link from 'next/link'

const Card: NextPage = (props) => {
  if (props.data) {
    const card = props.data.NEW_BOOK_DATA.map((value, key) => (
      <div className = "col-sm-4" key = {key}>
        <Link href = {{ pathname: '/book/detail/[id]', query: { id: value.id }}} passHref>
          <a>
            <div className = "card bg-light card-wrap" style = {{maxWidth: '25rem'}}>
              <Image src = "/image/logo.png" className = "card-img-top border-bottom" width = {200} height = {200}/>
              <div className = "card-body bg-white">
                <h4 className = "card-title text-nowrap">{value.title}</h4>
                <mark>{value.book_tag}</mark>
              </div>
            </div>
          </a>
        </Link>
      </div>
    ))

    return (
    <div className = "row pt-3 pb-5">
      {card}
    </div>
    )
  }
}


const NewBook: NextPage = (props) => {
  const { data } = useSWR('/api/new/book', () =>
    axios
        .get('/api/new/book')
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

export default NewBook