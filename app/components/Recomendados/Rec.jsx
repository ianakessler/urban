import Link from "next/link";
import styles from "./Rec.module.css";

export default function Recomendados(props){

    return(

        <Link className={styles.link} href={`/produtos/${props.link}`}>

            <div className={styles.rec}>
                <div className={styles.img}>
                    <img width="100%" src={`${props.img}`} />
                </div>
                <div className={styles.inf}>
                    <p>{props.nome}</p>
                </div>
            </div>

        </Link>
    )
}