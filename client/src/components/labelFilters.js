import style from '../styles/LabelFilters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '@/redux/features/products/productsSlice';


export default function LabelFilter({ filter , by }) {

    const { filters } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handlerSetCategoria = () => {
        dispatch(setFilters({
            ...filters,
            categorias: {}
        }))
    }

    const handleSetName = () => {
        dispatch(setFilters({
            ...filters,
            name: ""
        }))
    }

    const handlerSetStatus = (e) => {
        let newstatus = filters.status.filter(statu => statu !== e.target.value);

        dispatch(setFilters({
            ...filters,
            status: newstatus
        }))
    }

    const handlerSetPrice = () => {
        dispatch(setFilters({
            ...filters,
            price:{
                min: 100,
                max: 10000000
            }
        }))
    }

    if(by === 'categorias'){
        return (
            <div className={style.container}>
                <button onClick={handlerSetCategoria}>x</button>
                <div>{filter.categoria}: {filter.subcategoria}</div>               
            </div>
        )
    };

    if(by === 'status'){
        return (
            <>
            {
                filter.map(statu => {
                    return (
                    <div key={statu} className={style.container}>
                        <button value={statu} onClick={handlerSetStatus}>x</button>
                        <div>{statu}</div>               
                    </div>
                )})
            }
            </>
        )
    }

    if(by === 'price'){
        return (
            <div className={style.container}>
                <button onClick={handlerSetPrice}>x</button>
                <div>min: {filter.min}, max: {filter.max}</div>               
            </div>
        )
    }

    if(by === 'name'){
        return (
            <div className={style.container}>
                <button onClick={handleSetName}>x</button>
                <div>name: {filter}</div>
            </div>
        )
    }
}