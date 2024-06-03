import Banner from "@/app/components/Banner/Banner";
import Cabecalho from "@/app/components/Cabecalho/Cabecalho";
import Container from "@/app/components/ContainerTxt/Container";
import styles from "./sobre.module.css";
import Rodape from "@/app/components/Rodape/Rodape";

export default function Sobre(){
    return(
        <div className={styles.app}>
            <Cabecalho/>
            <Banner 
            img="bg1.jpg"
            texto="Sobre nós"
            subTexto="Tudo que você quer saber sobre moda aqui."
            />

            <div className={styles.container}>

                <Container/>    

            </div>

            <Rodape/>

        </div>
    )
}