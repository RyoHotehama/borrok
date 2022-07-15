import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../../libs/axios'
import Image from 'next/image'
import Link from 'next/link'

const Card: NextPage = (props) => {
  if (props.data) {
    const card = props.data.RANKING_BOOK_DATA.map((value, key) => (
      <div className = "col-so-4 card-wrap h3" key = {key}>
        <Link href = {{ pathname: '/book/detail/[id]', query: { id: value.id }}} passHref>
          <a className = "stretched-link"></a>
        </Link>
        <div className = "card bg-light" style = {{maxWidth: '25rem'}}>
          <Image src = "/image/logo.png" className = "card-img-top border-bottom" width = {200} height = {200}/>
          {key + 1 == 1 &&
            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white pl-2 pr-2 pt-1">{key + 1}</span>
          }
          {key + 1 == 2 &&
            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white pl-2 pr-2 pt-1">{key + 1}</span>
          }
          {key + 1 == 3 &&
            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success text-white pl-2 pr-2 pt-1">{key + 1}</span>
          }
          {key + 1 == 4 &&
            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white pl-2 pr-2 pt-1">{key + 1}</span>
          }
          {key + 1 == 5 &&
            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white pl-2 pr-2 pt-1">{key + 1}</span>
          }
          <div className = "card-body bg-white">
            <h4 className = "card-title text-nowrap">{value.title}</h4>
            <mark className = "card-text h6">{value.book_tag}</mark>
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

const Ranking: NextPage = (props) => {
  const { data, error } = useSWR('/api/book/ranking', () =>
    axios
        .get('/api/book/ranking')
        .then((res: any) => res.data)
    )

  if (!data) {
    return (
      <div className = "d-flex align-items-center justify-content-center" style = {{height: 500}}>
        <div className = "text-center">
          <div className = "spinner-border text-primary" role = "status"></div>
          <div>
          <h2 className = "mt-2">Loading...</h2>
          </div>
        </div>
      </div>
    )
  }

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
export default Ranking