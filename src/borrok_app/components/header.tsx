import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Search from './search'

const Header: NextPage = () => {
  return (
    <div>
      <div className = "bg-light fixed-top">
        <div className = "container">
          <div className = "d-flex align-items-center">
            <div className = "mr-auto pt-3">
              <Link href = {{ pathname: '/'}} passHref>
                <a>
                  <Image src = "/image/logo.png" alt = "borrok" width = {150} height = {50} />
                </a>
              </Link>
            </div>
              <div className = "pt-2">
                <div className = "d-flex">
                  <div className = "pr-5">返却</div>
                  <div className = "pr-5 row">
                    <p data-bs-toggle = "modal" data-bs-target = "#searchModal">検索</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mt-1 ml-1" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </div>
                  <div>ログアウト</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Search />
    </div>
  )
}

export default Header