"use client"

import axios from "axios";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {

  async function obterAccessToken() {
    try {
      const response = await axios.post('https://sandbox.api.pagseguro.com/oauth2/token', {
        grand_type: 'challenge',
        scope: 'certificate.create'
      });
  
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao obter access token:', error);
      throw error;
    }
  }

  useEffect(()=>{
    obterAccessToken()
  })

  return (
    <main className={styles.main}>
      
    </main>
  );
}
