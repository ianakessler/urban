import Banner from "@/app/components/Banner/Banner";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import CardMosaic from "@/app/components/cardMosaico/cardMosaico";
import main from "@/services/api.js";

export default function Index() {

  const [lista, setLista] = useState([]);

  async function fetchData(){
    const res = await main();
    setLista(res);
    
  }
  useEffect(()=>{

    fetchData()
  },[])




  return (
    <div className={styles.app}>

      <Banner img="bg1.jpg" texto="Urban Mode"/>

      <h1 className={styles.h1}> SNEAKERS</h1>

      <div className={styles.Mosaico}>

        {
          lista.map((i)=>(
            <CardMosaic 
            link={i.id}
            key={i.id}
            img={i.imagem}
            nome={i.nome}
            marca={i.marca}
            />
          ))
        }

      </div>

    </div>
  );
}
