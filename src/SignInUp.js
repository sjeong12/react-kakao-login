const SignInUp = () => {
	{/* 토큰 발급을 위한 authorization 코드 추출 */}
	const url = new URL(window.location.href)
	const authorizationCode = url.searchParams.get('code')
	const kakaoTokenApi = `https://kauth.kakao.com/oauth/token?`
						+ `grant_type=authorization_code`
						+ `&client_id=f0902789045141da12904349c1b6d0b5`
						+ `&redirect_uri=http://localhost:3000/signin`
						+ `&code=${authorizationCode}`

	const kakaoMypageHandler = () => {
	  window.location.assign(kakaoTokenApi)
	}

	return (
		<div className="social-login">
			<p>추출한 auth code = {authorizationCode}</p>
			<button className="token-btn" type="button" onClick={kakaoMypageHandler}>
				<span>토큰 받기</span>
			</button>
		</div>
	)
}

export default SignInUp;