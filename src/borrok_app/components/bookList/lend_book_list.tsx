import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../../libs/axios'
import Image from 'next/image'
import Link from 'next/link'

const Card: NextPage = () => {
  const { data, error } = useSWR('/api/lend/book', () =>
    axios
        .get('/api/lend/book')
        .then((res: any) => res.data)
    )

  if (data) {
    const card = data.LEND_BOOK_DATA.map((value, key) => (
      <div className = "col-sm-4">
        <Link href = {{ pathname: '/'}} passHref>
          <a>
            <div className = "card bg-light" style = {{maxWidth: '25rem'}}>
              <Image src = "/image/logo.png" className = "card-img-top border-bottom" width = {200} height = {200}/>
              <div className = "card-body bg-white">
                <h4 className = "card-title" key = {key}>{value.title}</h4>
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

const LendBook: NextPage = (props) => {
  return (
    <div className = "container">
      <div className = "pt-5">
        <div className = "border-bottom border-warning">
          <h3>{props.title}</h3>
        </div>
          <Card />
      </div>
    </div>
  )
}
export default LendBook