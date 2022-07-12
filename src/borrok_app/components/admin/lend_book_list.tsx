import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../../libs/axios'
import Link from 'next/link'

const Card: NextPage = () => {
  const { data, error } = useSWR('/api/admin/book', () =>
    axios
        .get('/api/admin/book')
        .then((res: any) => res.data)
    )
  
  if (data) {
    return (
      <div>
        <table className = "table table-striped table-responsive">
          <caption className = "caption-top">貸出中</caption>
          <thead>
            <tr>
              <th scope = "col">管理番号</th>
              <th scope = "col">本のタイトル</th>
              <th scope = "col">貸出者</th>
              <th scope = "col">返却日</th>
            </tr>
          </thead>
          <tbody>
          {data.LEND_BOOK_DATA.map((value, key) => (
            <tr key = {key}>
              <th scope = "row" className = "text-primary">
                <Link href = {{ pathname: '/admin/[id]', query: { id: value.book_id }}} passHref>
                  <a>{value.book_id}</a>
                </Link>
              </th>
              <td>{value.title}</td>
              <td>{value.name}</td>
              <td>{value.return_date}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Card