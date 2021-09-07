import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from './App'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtual Museum</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
      <footer>
      </footer>
    </div>
  )
}

//<Museum />
