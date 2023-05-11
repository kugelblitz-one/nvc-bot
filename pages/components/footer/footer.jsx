import styles from "./footer.module.css";
import React from "react";
import AppIcons from "../icons/icons";

const Footer = () => (<footer className={styles.footerClass}>
        <div className={styles.linksContainer}>
            Contact us:

            <a className={styles.nameLink} href={'https://www.linkedin.com/in/anatrapoport/'}>
                <div>
                    <AppIcons type={'site'}  /> Rapoport
                </div>

            </a>
            <a className={styles.nameLink} href={'https://www.ripper234.com/'}>
                <div>
                    <AppIcons type={'linkedin'}  />   Ron Gross
                </div>
            </a>
        </div>
    </footer>

)

export default Footer
