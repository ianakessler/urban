import Cabecalho from "@/app/components/Cabecalho/Cabecalho"
import Rodape from "@/app/components/Rodape/Rodape"
import "@/app/styles/global.css"

export default function App({ Component, pageProps }) {
    return(
        <div>
            <Cabecalho/>
            <Component {...pageProps}>
                
            </Component>
            <Rodape/>
        </div>
    ) 
        
}