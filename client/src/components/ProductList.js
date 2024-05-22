import styles from '../styles/ProductList.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters, setOrderBy, setPage, setAmountXPage, fetchProductsAsync } from '../redux/features/products/productsSlice';
import ProductoCard from './productoCard';
import NotFound from './notFound';


export default function ProductList() {

    const router = useRouter();
    const { query } = router;

    const { filters, orderBy, page} = useSelector(state => state.products);
    const { productList } = useSelector(state => state.products);
    
    const dispatch = useDispatch();
    
    const updateURL = (newFilters, newOrderBy, newPage) => {
        const values = Object.values(newFilters);

        //categorias
        const keysCategoria = Object.values(values[0]);
        //estado
        const keysEstado  = Object.values(values[1]);
        //precio
        const keysPrecio  = Object.values(values[2]);
        //name
        const name  = values[3];

        if(keysCategoria.length === 0 && keysEstado.length === 0 && keysPrecio[0] === 0 && !name && newOrderBy === 'default' ){
            router.push(`/productos?all&page=${newPage}`, undefined, { shallow: true });
            return `products?all=all&page=${newPage}`
        }


        else{
            const newQueryParams = {
                categoria: newFilters.categorias.categoria,
                subcategoria: newFilters.categorias.subcategoria,
                name: newFilters.name,
                priceMin: newFilters.price.min,
                priceMax: newFilters.price.max,
                status: newFilters.status,
                sort_by: newOrderBy,
                page: newPage,
            };
        
            const newSearch = new URLSearchParams(newQueryParams).toString();
            router.push(`/productos?${newSearch}`, undefined, { shallow: true });
            return `products?${newSearch}`

        }
    };

    useEffect(() => {
        const url  = updateURL(filters, orderBy, page)
        // const filters = {};
        // const orderBy = query.sort_by || 'default';
        // const page = parseInt(query.page) || 1;


        // dispatch(setFilters(filters));
        // dispatch(setOrderBy(orderBy));
        // dispatch(setPage(page));

        dispatch(fetchProductsAsync(url));

        }, [filters,orderBy,page]);
    
    return (

        <div className={styles.container}>
        {productList?.products?.map(producto=>{
            return(
                <ProductoCard key={producto._id} producto={producto}/>
            )
        })}
        {
            productList.products.length === 0 && <NotFound/>
        }
        </div>
    )
}