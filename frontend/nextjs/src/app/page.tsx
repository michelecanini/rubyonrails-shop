import Image from 'next/image'
import styles from './styles/page.module.css'
import AccessManagement from './components/AccessManagement';

export default function Home() {
  return (
    <main className={styles.main}>
      <AccessManagement />
    </main>
  );
}
