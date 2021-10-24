import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from './App'
import { initializeApp } from "firebase/app";
import { useRouter } from 'next/Router'
//import { getAnalytics } from "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD94zbID5foX4Y5HvvfuNAIPUOHDqay12w",
  authDomain: "museum-data-b0490.firebaseapp.com",
  projectId: "museum-data-b0490",
  storageBucket: "museum-data-b0490.appspot.com",
  messagingSenderId: "1068383228308",
  appId: "1:1068383228308:web:54a41c6456e714dad17f81",
  measurementId: "G-332GBTNHS6",
  databaseURL: "https://museum-data-b0490-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
