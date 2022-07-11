import type { NextPage } from 'next'
import Image from 'next/image'

const Detail: NextPage = (props) => {
  if (props.data) {
    return (
      <div className = "card">
        <div className = "row g-0">
          <div className = "col-md-4 text-center border-right">
            <Image src = "/image/logo.png" className = "card-img-top" width = {200} height = {200}/>
          </div>
          <div className = "col-md-8 ">
            <div className = "card-body">
              <h5 className = "card-title">タイトル：<strong>{props.data.title}</strong></h5>
              <p className = "card-text h6">タグ：<strong>{props.data.book_tag}</strong></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Detail