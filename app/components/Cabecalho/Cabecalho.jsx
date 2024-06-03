import styles from "./Cabecalho.module.css";
import Link from "next/link";

export default function Cabecalho(){

 
    return(
        <header className={styles.header}>
            <div className={styles.containerHeader}>

                <Link href={"/"}>
                
                    <img className={styles.imagem} src="/logo.svg" />
                </Link>

                <nav className={styles.navMenu}>
                    <ul className={styles.list}>

                        <Link href={"/"}>
                             <li className={styles.listItem}>Home</li>

                        </Link>
                        <Link href={"../Sobre"}>
                             <li className={styles.listItem}>Sobre nós</li>

                        </Link>
                        <Link href={"../Sobre"}>
                             <li className={styles.listItem}>Contato</li>

                        </Link>
                   
                    </ul>
                </nav>

              
            </div>
        </header>
    )
}