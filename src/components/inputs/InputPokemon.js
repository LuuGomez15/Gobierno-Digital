import React, { useState } from 'react'

export const InputPokemon = ({ onNewPokemon }) => {
    const [inputValue, setInputValue] = useState('');
    const OnInputChanged = ({target}) => {
        setInputValue( target.value );
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewPokemon(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder='Buscar Pokemon'
                value={ inputValue }
                onChange={ OnInputChanged }
            />
        </form>
    )
}
