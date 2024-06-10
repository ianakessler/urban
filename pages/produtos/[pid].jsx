import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "@/app/components/Card/Card";
import main from "@/services/api";
import styles from "./id.module.css";
import Recomendados from "@/app/components/Recomendados/Rec";


export default function Page(){
    const [produto, setProduto] = useState(null);
    const [recomendados, setRecomendados] = useState(null)

    const { query } = useRouter();
    const pid = query?.pid;

    useEffect(()=>{
        async function data(){
            const res = await main();
            const rec = res.filter((prod)=>{
                return prod.marca == res[pid-1].marca && prod.id != pid;
            })
            setProduto(res[pid-1]);
            setRecomendados(rec);
        }

        if(pid){
            data();
        }
    }, [pid])

    

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

            <h2 className={styles.h2}> 
                Produtos Recomendados
            </h2>

            <div className={styles.Recomendacao}>
                {recomendados.map((i)=>(
                    <Recomendados 
                    key={i.id}
                    link={i.id}
                    img={i.imagem}
                    nome={i.nome}
                    />
                ))}
            </div>
            
        </>
        
    )
}