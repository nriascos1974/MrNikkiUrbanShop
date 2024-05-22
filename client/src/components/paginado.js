import styles from "../styles/Paginado.module.css";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setPage } from "@/redux/features/products/productsSlice";
import debounce from "@/utils/debounce";

const Paginado = () => {
    // LÓGICA DEL COMPONENTE

    const { cantidad } = useSelector(state => state.products?.productList);
    //pagina para color 
    const { page } = useSelector(state => state.products);

    const { amountXPage } = useSelector(state => state.products?.productList ) ;
   
    const dispatch = useDispatch();
    const [paginate,setPaginate] = useState(1)
    const numOfPages = Math.ceil( cantidad / amountXPage);

    const array = Array.from({ length: numOfPages }, (_, index) => index + 1);
    useEffect(()=>{
        dispatch(setPage(paginate))
    },[paginate])


    const handleCurrentPage = (e) => {
        const { name,text } = e.target;
        if(name === 'prev' && paginate > 1){
            // console.log('prev');
            setPaginate(paginate - 1)
            // dispatch(setPage(page - 1));
        };
        if(name === 'next' && paginate < numOfPages){
            // console.log('next');
            setPaginate(paginate + 1)
            // dispatch(setPage(page + 1));
        };
        if(name === "page"){
            // console.log('page');
            setPaginate(parseInt(text))

        }
    }

  const debouncedhandleCurrentPage = debounce(handleCurrentPage, 500);

    // RENDERIZADO DEL COMPONENTE
    return (
        <div className={styles.container}>
            <Pagination className={styles.pagination}>
                <Pagination.Prev name='prev' onClick={handleCurrentPage} />
                {array.map(pageNum=>{
                    const isActive = pageNum === page;
                    return <Pagination.Item  name={'page'} key={pageNum} onClick={(e)=> debouncedhandleCurrentPage(e)} active={isActive}>{pageNum}</Pagination.Item>
                })}         
                <Pagination.Next name='next'  onClick={handleCurrentPage} />
            </Pagination>
        </div>
    );
};

export default Paginado;