import CardMosaic from "../cardMosaico/cardMosaico";
import styles from "./mosaico.module.css";


export default function Mosaico(){


    return(
        <div className={styles.mosaico}>
            
            <CardMosaic
            img="pretao"
            nome="pretao"
            marca="converse"
            />
        </div>
    )
}