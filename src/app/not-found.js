import styles from '@/app/styles/common.module.css'
import Link from "next/link";

const NotFound = () => {
    return (
        
        <section className={styles.container}>
            <div className={styles.error_page}>
                <h2>404</h2>
                <h3>Not Found</h3>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button className={styles.notfoundbtn}>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;