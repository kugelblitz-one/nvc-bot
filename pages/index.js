import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
const demoText  = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,/n "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`


export default function Home() {
  const [nvcTextInput, setNVCTextInput] = useState("");
  const [result, setResult] = useState(demoText);

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
         data.result = data.result.replace("\n\n", '');
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      //setNVCTextInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className={styles.appContainer }>
      <Head>
        <title>NVC Bot</title>
        <link rel="icon" href="/joe_nvc.jpeg" />
      </Head>


      <main className={styles.main}>
        <img src="/joe_nvc.jpeg" className={styles.icon} />
        <div className={styles.centercol}>
            <h3>Translate jackal to NVC:</h3>
            <form onSubmit={onSubmit}>
              <textarea rows="12" cols="100"
                type="text"
                name="nvcText"
                placeholder="E.g. You are a lousy driver"
                value={nvcTextInput}
                onChange={(e) => setNVCTextInput(e.target.value)}
              />
              
              <input type="submit" value="Takam Bot Says:" />
            </form>
            <div  className={styles.resultWrapper}>
                <div className={styles.result}>
                <pre style={{'margin':'0', 'white-space': "pre-wrap", 'width':'100%'}}>
                    {result}</pre></div>
            </div>

          </div>
      </main>
    </div>
    
  );
}
