// React imports
import React from 'react'
import { Link } from 'react-router-dom';

// Components
import { Category } from './Category';
import { Description } from './Description';
import { Loading } from '../loading/Loading';

// Hooks
import { useFetch } from '../../hooks/useFetch';

export const CardItems = ({ pokemon }) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    const { loading, data } = useFetch(url);
    return (
        <>
            {
                loading
                ?
                <div className='card-description'>
                    <Loading/>
                </div>
                :
                <div className="row card-description">
                    <div className='col-6'>
                        <h3 className="text-capitalize"><b>{data.name}</b></h3>
                        <div>
                            <img src={data.sprites.other.dream_world.front_default}
                                alt="pokemon"/>
                        </div>
                    </div>
                    <div className='col-6'>
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
                    </div>
                    <Link to='/pokemon'
                        type="button" className="btn btn-success">
                        <i className="fa-solid fa-circle-arrow-left"/> Regresar
                    </Link>
                </div>
            }
        </>
    )
}
