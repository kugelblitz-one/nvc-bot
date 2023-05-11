import styles from "./footer.module.css";
import React from "react";

const Footer = () => (<footer className={styles.footerClass}>
            <div className={styles.linksContainer}>
            <a className={styles.nameLink} href={'https://www.linkedin.com/in/anatrapoport/'}>Anat Rapoport
            </a>
            <a className={styles.nameLink} href={'https://www.ripper234.com/'}>Ron Gross
            </a>
            </div>
</footer>

)

export default Footer
