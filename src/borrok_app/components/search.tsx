import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from "next/router"
import axios from '../libs/axios'

const Search: NextPage = () => {
  const router = useRouter();
  const [word, setWord] = useState('')
  const handleChange = (event) => {
    setWord(event.target.value);
  }

  const onClick = () => {
    router.push({
      pathname: "/booklist",
      query: {
        word: word,
      }
    });
  }

  return (
    <div className = "modal" id = "searchModal" tabIndex = "-1" role = "dialog" aria-labelledby = "searchModalLabel" aria-hidden = "true">
      <div className = "modal-dialog" role = "document">
        <div className = "modal-content">
          <div className = "modal-header">
            <h5 className = "modal-title" id = "searchModalLabel">作品を探す</h5>
            <button type = "button" className = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
          </div>
          <div className = "modal-body">
            <div>
              <h5>作品タイトルから探す</h5>
              <input className = "form-controll" type= "text" name = "search" value = {word} onChange = {handleChange}/>
              <button type = "button" className = "btn btn-primary ml-4" data-bs-dissmiss = "modal" onClick = {onClick}>検索</button>
            </div>
            <div className = "mt-5">
              <h5>言語から探す</h5>
              <div>
                <div className = "form-check">
                  <input className = "form-check-input" type = "checkbox" value = "" id = "tag1"/>
                  <label className = "form-check-label">PHP</label>
                </div>
                <div className = "form-check">
                  <input className = "form-check-input" type = "checkbox" value = "" id = "tag2"/>
                  <label className = "form-check-label">その他</label>
                </div>
                <button type = "button" className = "btn btn-primary mt-3" data-bs-dissmiss = "modal">検索</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search