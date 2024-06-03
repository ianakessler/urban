import styles from "./Banner.module.css";

export default function Banner(props){
    return(
        <div className={styles.Banner} style={{backgroundImage: `url(${props.img})`}}>
            <div className={styles.container}>
                <h2>{props.texto}</h2>
                <span>{props.subTexto}</span>
            </div>
        </div>
    )
}