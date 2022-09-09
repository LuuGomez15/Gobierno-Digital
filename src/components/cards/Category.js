// Components
import { Loading } from '../loading/Loading';

// Hooks
import { useFetch } from '../../hooks/useFetch';

export const Category = ({url}) => {
    const { loading, data } = useFetch(url);
    
    return (
        <>
        {
            loading ? <Loading/> :
            <p>{data.genera[5].genus}</p>
        }
        </>
    )
}
