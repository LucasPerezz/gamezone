import { useEffect, useState } from 'react';


const useData = () => {

    const [products_data, setProducts_data] = useState([]);
    const [games_data, setGames_data] = useState([])
    const [products_loading, setProducts_loading] = useState(true);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1144")
        .then(res => res.json())
        .then(data => setProducts_data(data.results))
        .catch(err => console.log(err))
        .finally(() => setProducts_loading(false))

    }, [])

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA373840")
        .then(res => res.json())
        .then(data => setGames_data(data.results))
        .catch(err => console.log(err))
        .finally(() => setProducts_loading(false))
    }, [])


    return {
        products_data,
        games_data,
        products_loading
    }
}

export default useData;