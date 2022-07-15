import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '../libs/axios'

const Hello: NextPage = () => {
    const { data, error } = useSWR('/api/book', () =>
    axios
        .get('/api/book')
        .then((res: any) => res.data)
    )
     console.log(error);
    if (error) return <div>{error.response.status}エラーが発生しました</div>
    if (!data) return <div>読み込み中</div>
    return (
    <div>
        <h1>ようこそ</h1>
        {data.BOOK_DATA.map((value, key) =>(
            <p key={key}>{value.id}</p>
        ))}
    </div>
    )
}
 
export default Hello