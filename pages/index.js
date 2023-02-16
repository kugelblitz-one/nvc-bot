import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [nvcTextInput, setNVCTextInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nvcText: nvcTextInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setNVCTextInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>NVC Bot</title>
        <link rel="icon" href="/joe_nvc.jpeg" />
      </Head>

      <main className={styles.main}>
        <img src="/joe_nvc.jpeg" className={styles.icon} />
        <h3>Write your shit here</h3>
        <form onSubmit={onSubmit}>
          <textarea rows="8" cols="50"
            type="text"
            name="nvcText"
            placeholder="You are a lousy driver"
            value={nvcTextInput}
            onChange={(e) => setNVCTextInput(e.target.value)}
          />
          <br/>
          <input type="submit" value="Takam Bot Says" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
