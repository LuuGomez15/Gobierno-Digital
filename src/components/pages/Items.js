// React imports
import { Link } from 'react-router-dom';

// Components
import { Loading } from '../loading/Loading';
import { Category } from '../cards/Category';
import { Description } from '../cards/Description';

// Hooks
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

export const Items = () => {
    let { pokemon } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    const { loading, data } = useFetch(url);

    return (
        <>
            {
                loading
                ?
                <Loading/>
                :
                <div className="row">
                    <div className='col-12 card'>
                        <h3 className="card-title text-capitalize"><b>{data.name}</b></h3>
                        <div className="card-body">
                            <img src={data.sprites.other.dream_world.front_default}
                                alt="pokemon"/>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <b>Categoría:</b>
                                    {
                                        loading ? <Loading/> :
                                        <Category url={data.species.url}/>
                                    }
                                </li>
                                <li>
                                    <b>Tipo: </b>{data.types[0].type.name}
                                </li>
                                <li>
                                    <b>Altura: </b>{data.height/10} m
                                </li>
                                <li>
                                    <b>Peso: </b>{data.weight/10} Kg
                                </li>
                            </ul>
                            <div>
                                <p><b>Descripción:</b></p>
                                {
                                    loading ? <Loading/> :
                                    <Description url={data.species.url}/>
                                }
                            </div>
                        </div>
                        <Link to='/pokemon'
                            type="button" className="btn btn-success">
                            <i className="fa-solid fa-circle-arrow-left"/> Regresar
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}
