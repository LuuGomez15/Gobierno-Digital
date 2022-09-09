// Components
import { Loading } from '../loading/Loading';

// Hooks
import { useFetch } from '../../hooks/useFetch';

export const Description = ({url}) => {
    const { loading, data } = useFetch(url);
    return (
        <>
        {
            loading ? <Loading/> :
            <p>{data.flavor_text_entries[26].flavor_text}</p>
        }
        </>
    )
}
