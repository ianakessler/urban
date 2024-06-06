import styles from "./card.module.css";

export default function Card(props){
    return(
        <div className={styles.container}>

            <div className={styles.imagem}>
                <img src={props.img} alt={props.alt}/>
            </div>

            <div className={styles.infos}>
                <div className={styles.infoBox}>
                    <h2 className={styles.titulo}>{props.titulo}</h2>
                    <h3>R$ {props.preco}</h3>
                    <p className={styles.descri}>{props.descricao}</p>
                    <h3>{props.marca}</h3>
                </div>
            </div>

        </div>
    )
}