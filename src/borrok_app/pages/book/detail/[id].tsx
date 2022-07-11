import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import axios from '../../../libs/axios'
import Layout from '../../../components/layout';
import Detail from '../../../components/detail';

const POST: NextPage = () => {
  const [return_date, setReturn_date] = useState('');
  const [book_id, setBook_id] = useState('');
  const user_id = 1;
  const borrow_date = '2022-07-11';
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR('/api/book/' + id, () =>
    axios
        .get('/api/book/' + id)
        .then((res: any) => res.data)
    )

    const handleChange = (event) => {
      setReturn_date(event.target.value);
      setBook_id(data.id)
    }

    const onClick = () => {
      router.push({
        pathname: "/example",
        query: {
          user_id: user_id,
          book_id: book_id,
          borrow_date: borrow_date,
          return_date: return_date,}
      });
    }
  
  if (data) {
    return (
      <Layout title = "-borrok-">
        <div className = 'container'>
          <div className = "mt-4 mb-4">
            <h3>{data.title}</h3>
          </div>
          <div>
            <Detail data = {data}/>
          </div>
          <div className = "row mt-4">
            <div className = "col-5 text-right mr-5">
              <Link href = {{ pathname: '/'}} passHref>
                <a>
                  <button className = "btn btn-danger btn-lg">戻る</button>
                </a>
              </Link>
            </div>
            <div className = "col">
              <button className = "btn btn-success btn-lg" data-bs-toggle = "modal" data-bs-target = "#borrowModal">借りる</button>
            </div>
          </div>
          <div className = "modal" id = "borrowModal" tabIndex = "-1" role = "dialog" aria-labelledby = "borrowModalLabel" aria-hidden = "true">
            <div className = "modal-dialog" role = "document">
              <div className = "modal-content">
                <div className = "modal-header">
                  <h5 className = "modal-title" id = "borrowModalLabel">{data.title}</h5>
                  <button type = "button" className = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
                </div>
                <div className = "modal-body">
                  <Image src = "/image/logo.png" className = "card-img-top" width = {200} height = {200}/>
                  <h4>返却日</h4>
                  <p className = "small text-secondary">※最大１週間まで借りることができます</p>
                  <input type = "date" name = "return_date" value = {return_date} onChange = {handleChange}/>
                </div>
                <div className = "modal-footer">
                  <button type = "button" className = "btn btn-secondary" data-bs-dissmiss = "modal" onClick = {onClick}>bbb</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default POST