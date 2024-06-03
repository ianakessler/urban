import Link from "next/link";
import styles from "./rodape.module.css";

export default function Rodape(){
    return(
        <div className={styles.rodape}>
            <div className={styles.containerFooter}>

                <nav className={styles.navFooter}>
                    Navegação
                    <ul className={styles.list}>
                        <li className={styles.listItem} ><Link href={"/"}>Home</Link></li>
                        <li className={styles.listItem} ><Link href={"../Sobre"}>Sobre nós</Link></li>
                        <li className={styles.listItem} ><Link href={"../Contato"}>Contato</Link></li>
                    </ul>
                </nav>

                <div className={styles}>
                    <p>Trabalho desenvolvido por:</p>
                    <ul className={styles.equipe}>
                        <li><p>Ian Aratangy Kessler: 12523129071</p></li>
                        <li><p>Felipe Akira Miyagi: 12523179516</p></li>
                        <li><p>Kamila Dias de Araujo: 12523179753</p></li>
                        <li><p>Ian Aratangy Kessler: 12523129071</p></li>
                    </ul>
                </div>

                <div>
                    <p>Contato</p>
                    <p>Email: example@gmail.com</p>
                    <p>Nº Telefone: (11) 91111-2222</p>
                </div>

            </div>

        </div>
    )
}