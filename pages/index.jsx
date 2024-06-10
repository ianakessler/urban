import Banner from "@/app/components/Banner/Banner";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import CardMosaic from "@/app/components/cardMosaico/cardMosaico";
import main from "@/services/api.js";
import Formulario from "@/app/components/Form/Form";

export default function Index() {

  const [lista, setLista] = useState([]);
  const [listaOg, setListaOg] = useState([...lista]);
  

  async function fetchData(){
    const res = await main();
    setLista(res);
    setListaOg(res);
    
  }
  useEffect(()=>{

    fetchData()
  },[])


  function filtrarLista(data){
    
    const listFiltrada = listaOg.filter((i)=>{
      return i.marca == data.marca && i.preco < parseFloat(data.rangeVal);
    })

    setLista(listFiltrada)
  }

  return (
    <div className={styles.app}>

      <Banner img="bg1.jpg" texto="Urban Mode"/>

      <h1 className={styles.h1}> SNEAKERS</h1>

      <Formulario
        postForm={data=> filtrarLista(data)}
      />

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
