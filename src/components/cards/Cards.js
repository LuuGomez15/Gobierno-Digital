// Components
import { CardPokemon } from "./CardPokemon"

// Styles
import './Cards.css';

export const Cards = ({results}) => {
  return (
    <>
        <div className="card-grid">
            {
                results.map( p => (
                    <div className="cards" key={p.name}>
                        <CardPokemon url={p.url} />
                    </div>
                ))
            }
        </div>
    </>
  )
}
