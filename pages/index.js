import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.img}>
        <img src="icons/wexchangeLogo.png" />
      </div>
      <div className={styles.buttonContain}>
        <Link className={styles.link} href="/login">
          <div className={styles.button}>Login</div>
        </Link>
      </div>
      <div className={styles.buttonContain}>
        <Link className={styles.link} href="/signup">
          <button className={styles.button}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
