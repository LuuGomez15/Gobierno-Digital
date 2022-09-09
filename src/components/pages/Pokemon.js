// React imports
import { useState } from "react";

// Components
import { Cards } from "../cards/Cards";
import { Loading } from "../loading/Loading";

// Hooks
import { useFetch } from "../../hooks/useFetch";

export const Pokemon = () => {
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
    const { loading, data } = useFetch(url);

    return (
        <>
            {
                loading 
                ? 
                <Loading/>
                : 
                <div className="grid">
                    <Cards results={data.results}/>

                    <div className="buttons">
                        <button onClick={() => setUrl(data.previous)} className="m-2 btn btn-info">
                            <i className="fa-solid fa-chevron-left"/>
                            Anterior
                        </button>
                        <button onClick={() => setUrl(data.next)} className="m-2 btn btn-info">
                            Siguiente
                            <i className="fa-solid fa-chevron-right"/>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
