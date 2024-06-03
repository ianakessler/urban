import Banner from "@/app/components/Banner/Banner";
import Cabecalho from "@/app/components/Cabecalho/Cabecalho";
import Rodape from "@/app/components/Rodape/Rodape";


export default function Index(){
    return(
        
        <div>

            <Cabecalho/>

            <Banner 
            img="bg1.jpg"
            />  
    
            <Rodape/>
        </div>
    )
}