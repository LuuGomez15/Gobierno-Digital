// Components
import { Loading } from '../loading/Loading';

// Hooks
import { useFetch } from '../../hooks/useFetch';

// Styles
import './Cards.css'

export const CardPokemon = ({url}) => {
    const { loading, data } = useFetch(url);

    return (
        <>
            {
                loading
                ?
                <Loading/>
                :
                <div className="card">
                    <img src={data.sprites.other.dream_world.front_default}
                        className="card-img-top" alt="pokemon"/>
                    <div className="card-body">
                        <h2><b>#</b> {data.id}</h2>
                        <h5 className="card-title text-capitalize">{data.forms[0].name}</h5>
                    </div>
                </div>
            }
        </>
    )
}
