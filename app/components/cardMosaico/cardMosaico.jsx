import styles from "./cardMosaico.module.css";
import Link from "next/link";

export default function CardMosaic(props){
    return(

        <Link className={styles.link} href={`/produtos/${props.link}`}>

            <div className={styles.card}>
                <div className={styles.img}>
                    <img width="100%" src={`${props.img}`} />
                </div>
                <div className={styles.infos}>
                    <h3>{props.nome}</h3>
                    <h4>{props.marca}</h4>
                </div>
            </div>
        </Link>
    )
}