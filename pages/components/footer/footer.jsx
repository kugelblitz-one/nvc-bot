import styles from "./footer.module.css";
import React from "react";
import AppIcons from "../icons/icons";

const Footer = () => (<footer className={styles.footerClass}>
        <div className={styles.linksContainer}>
            <span className={styles.contactUs}>  Contact us:</span>


            <a className={styles.nameLink} href={'https://www.linkedin.com/in/anatrapoport/'}>
                <div className={styles.divLink}>
                    <AppIcons type={'linkedin'}/> <span> Anat Rapoport
 </span>
                </div>

            </a>
            <a className={styles.nameLink} href={'https://www.ripper234.com/'}>
                <div className={styles.divLink}>
                    <AppIcons type={'site'}/> <span>Ron Gross</span>
                </div>
            </a>
        </div>
    </footer>

)

export default Footer
