'use client';

import { useRouter } from 'next/navigation';
import './Header.scss';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <p className="header-title" onClick={() => router.push('/')}>
        Blog
      </p>
      <div className="header-right">
        <input type="text" placeholder="記事を検索" />
        <button onClick={() => router.push('/login')}>ログイン</button>
        <button onClick={() => router.push('/register')}>登録</button>
      </div>
    </header>
  );
};

export default Header;
