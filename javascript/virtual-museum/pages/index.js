import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Museum from './Museum'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virtual Museum</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Museum />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Virtual Museum
        </h1>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
