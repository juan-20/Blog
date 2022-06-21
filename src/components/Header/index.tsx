import Link from 'next/link';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src="https://avatars.githubusercontent.com/u/49418565?v=4" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
