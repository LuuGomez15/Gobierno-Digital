// Hooks
import { useState } from 'react';
import { CardItems } from '../cards/CardItems';
import { InputPokemon } from '../inputs/InputPokemon';

export const Items = () => {
    const [ search, setSearch ] = useState('');
    const onAddPokemon = ( newPokemon ) => {
        setSearch( newPokemon );
    }
    // let { pokemon } = useParams();

    return (
        <>
            <div className='description'>
                <InputPokemon
                    onNewPokemon={ onAddPokemon }
                />
            </div>
            <div className='description'>
                <CardItems pokemon={search}/>
            </div>
        </>
    )
}
