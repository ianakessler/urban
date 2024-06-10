import { useState } from "react";
import styles from "./Form.module.css";

export default function Formulario(props){
    
//     249.9
// 1999.9

    const [rangeVal, setRangeVal] = useState(249.9);
    const [marca, setMarca] = useState('New Balance');

    function handleRange(event){
        setRangeVal(event.target.value)
    }

    function handleMarca(event){
        setMarca(event.target.value);
    }

    function aoEnviar(event){
        event.preventDefault();

        props.postForm({
            rangeVal,
            marca
        })
    }
    
    return(
        <div className={styles.formContainer}>
            <form onSubmit={aoEnviar}>

                <p>

                    <label>
                        Marca:

                        <select value={marca} onChange={handleMarca}>
                            <optgroup label="Marca">

                                <option>New Balance</option>
                                <option>Nike</option>
                                <option>Adidas</option>
                                <option>Jordan</option>
                                <option>Asics</option>
                                <option>Converse</option>
                            </optgroup>
                            
                        </select>
                    </label>
                </p>

                <p>
                    <label>
                        Preço:
                        <input value={rangeVal} onChange={handleRange} type="range" min={249.9} max={1999.9}/>
                        R$ {rangeVal}
                    </label>
                </p>

                <input type="submit"/>
            </form>
        </div>
    )
}