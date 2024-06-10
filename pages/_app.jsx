import Cabecalho from "@/app/components/Cabecalho/Cabecalho";
import Rodape from "@/app/components/Rodape/Rodape";
import topButton from "@/app/components/backToTop/Btn";
import "@/app/styles/global.css";
import styles from "./_app.module.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
    return(
        <div>
            <Cabecalho/>
            <Component {...pageProps}>
                
            </Component>
            <Link href={'#'}>
                <div className={styles.seta}>
                    <img src='/svg/seta.svg'/>
                </div>
            </Link>
            <Rodape/>
        </div>
    ) 
        
}