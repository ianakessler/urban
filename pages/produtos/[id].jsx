import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "@/app/components/Card/Card";
import main from "@/services/api";
import styles from "./id.module.css";


export default function Page(){
    const [produto, setProduto] = useState(null);
    const { query } = useRouter();
    const id = query?.id;

    useEffect(()=>{
        async function data(){
            const res = await main();
            setProduto(res[id-1]);
        }

        if(id){
            data();
        }
    }, [id])

    if(!produto){
        return <div className={styles.erro}><p>Este tênis não foi encontrado em nosso banco de dados!!</p></div>
    }

    return(
        <>
            <Card 
                img={produto.imagem}
                alt={produto.nome}
                titulo={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                marca={produto.marca}
            />
        </>
        
    )
}