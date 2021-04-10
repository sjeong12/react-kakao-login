import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react'
import qs from 'qs';

const SocialLogin = () => {
  const kakaoApi = `https://kauth.kakao.com/oauth/authorize?`
  + `response_type=code`
  + `&client_id=f0902789045141da12904349c1b6d0b5`
  + `&redirect_uri=http://localhost:3000/signin`

  const kakaoLoginHandler = () => {
    window.location.assign(kakaoApi)
  }

  useEffect(async () => {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')

    const data = {
      'grant_type':'authorization_code',
      'client_id':'f0902789045141da12904349c1b6d0b5',
      'redirect_uri':'http://localhost:3000/signin',
      'code':authorizationCode,
      'client_secret':'tbwU9TKk12VqE97Uwjx7zixoR6nr4jNV' };
      const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url:'https://kauth.kakao.com/oauth/token',
    };
    let tokenData = axios(options);

    console.log('인증 코드', authorizationCode);
    console.log('토큰', tokenData)
  }, [])

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
