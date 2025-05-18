'use client';

import { useActionState } from 'react';
import { userRegistration } from '../lib/actions/userRegistration';
import './login.scss';

const LoginPage = () => {
  const [, formAction] = useActionState(userRegistration, { success: false, errors: {} });

  return (
    <div className="login-container">
      <h3>ログイン</h3>
      <form action={formAction}>
        <div className="email-content">
          <p>メールアドレス</p>
          <input id="email" name="email" type="text" placeholder="メールアドレス" />
        </div>
        <div className="password-content">
          <p>パスワード</p>
          <input id="password" name="password" type="password" placeholder="パスワード" />
        </div>
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;
