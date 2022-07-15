import type { NextPage } from 'next'
import { useRouter } from "next/router"
import useSWR from 'swr'
import axios from '../libs/axios'

const POST: NextPage = () => {
  const router = useRouter();
  const { user_id, book_id, borrow_date, return_date } = router.query;
  if (user_id) {
  const {data, error} = useSWR('api/book/borrow', () =>
        axios
            .post('api/book/borrow', {
              user_id: user_id,
              book_id: book_id,
              borrow_date: borrow_date,
              return_date: return_date,
            })
      )
      if (data) {
        router.push({
          pathname: "/book/detail/[id]",
          query: {id: book_id}
      })
          }
          }
        }
export default POST