import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'

const SocialLogin = () => {
    const kakaoApi = `https://kauth.kakao.com/oauth/authorize?`
                  + `response_type=code`
                  + `&client_id=f0902789045141da12904349c1b6d0b5`
                  + `&redirect_uri=http://localhost:3000/signin`

    const kakaoLoginHandler = () => {
      window.location.assign(kakaoApi)
    }

    return (
      <div className="social-login">
        <h1>KAKAO LOGIN</h1>
        <a id="custom-login-btn" onClick={kakaoLoginHandler}>
          <img
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222"
          />
        </a>
      </div>
    )
}

export default SocialLogin;
