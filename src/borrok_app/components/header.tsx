import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const Header: NextPage = () => {
  return (
    <div className = "bg-light">
      <div className = "container">
        <div className = "d-flex align-items-center">
          <div className = "mr-auto pt-3">
            <Link href = {{ pathname: '/'}} passHref>
              <a>
                <Image src = "/image/logo.png" alt = "borrok" width = {150} height = {50} />
              </a>
            </Link>
          </div>
          <div>
            <div className = "pt-2">
              <div className = "d-flex">
                <div className = "pr-5">返却</div>
                <div className = "pr-5">検索</div>
                <div>ログアウト</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header