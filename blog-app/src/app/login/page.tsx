import './login.scss';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h3>ログイン</h3>
      <form action="">
        <div className="email-content">
          <p>メールアドレス</p>
          <input type="text" placeholder="メールアドレス" />
        </div>
        <div className="password-content">
          <p>パスワード</p>
          <input type="password" placeholder="パスワード" />
        </div>
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;
