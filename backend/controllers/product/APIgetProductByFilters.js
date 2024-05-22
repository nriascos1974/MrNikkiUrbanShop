const DBProductsFilters = require('../../database/controllers/products/productGet/DBProductGetFilters');

const conditions = {
    isUndefined : "undefined",
    asc : "asc",
    desc : "desc",
    typeof:{
        string: "string",
        integer: "number",
        boolean: "boolean"
    }
}

const getProductsByFilters = async (req, res) => {

    //Va a recibir por QUERY los filtros y adicionalmente tambien recibirá el name para buscar
    try{
       
        let {page,categoria, subcategoria, status, priceMin, priceMax, order,  name, all,sort_by} = req.query;
        
        let allStatus = [];

        if (status){ allStatus = status.split(',')};
 
        let aSort = [];
        if (sort_by && sort_by != "default"){
            aSort = sort_by.split('-');
        } else{
            aSort = ['asc', 'name'];
        }
        
        //Si no llega ninguna pagina, la seteo en 1
        page ? page : page = 1;
        
      
       
        const amountXPage = 24;

        const filters = {
            categories : categoria && !(categoria === conditions.isUndefined) ? {
                category :  categoria,
                subcategory : subcategoria && !(subcategoria === conditions.isUndefined)? subcategoria : null
            } : null,
            status : allStatus.length > 0 ? allStatus : null,
            //El codigo priceMin !== '0' && priceMax !== '100' está hardcodeado, se debe acomodar usando datos enviados por el front
            price : priceMin  && priceMax  && priceMin !== '0' && priceMax !== '100' ? {
                min : priceMin ? priceMin : null,
                max : priceMax ? priceMax : null
            } : null
        }


        let products = await DBProductsFilters(filters);
  
        if (products){
           
           
      
            const indexLastProd = page * amountXPage
            const indexFirstProd = indexLastProd - amountXPage

            if (name){
                products = products.filter(prod => prod.name.toLowerCase().includes(name.toLowerCase()));
            }

            const amountProd = products.length;

            if (aSort){
                products = products.sort((a, b) => {
                
                    switch (typeof a[aSort[1]]){
                        case (conditions.typeof.integer):
                            if (conditions.asc === aSort[0]){
                                return a[aSort[1]] - b[aSort[1]]
                            }

                            return b[aSort[1]] - a[aSort[1]];
                        break;

                        case (conditions.typeof.boolean):
                            if (conditions.asc === aSort[0]){
                                if (a.active && !b.active) {
                                    return -1; // a es verdadero y b es falso, a viene primero
                                } else if (!a.active && b.active) {
                                    return 1; // b es verdadero y a es falso, b viene primero
                                } else {
                                    return 0; // ambos son verdaderos o falsos, el orden no importa
                                }
                            }

                            if (!a.active && b.active) {
                                return -1; 
                            } else if (a.active && !b.active) {
                                return 1; 
                            } else {
                                return 0; 
                            }
                        break;

                        default:
                            if (conditions.asc === aSort[0]){
                        
                                return a[aSort[1]].localeCompare(b[aSort[1]]);
                            }
            
                            return b[aSort[1]].localeCompare(a[aSort[1]]);
                        break;
                    }
                    
                }).filter((prod) => prod.name)
            }



            const prodsXPage = products.slice(indexFirstProd, indexLastProd);
    
            return res.status(200).json({
                cantidad: amountProd,
                amountXPage: amountXPage,
                products : prodsXPage
            });
        }
    
        return res.status(404).json({msg: "Error 404, not found"});
    } catch (err){
        return res.status(500).json({error: err.message,
                                    msg: "Error al buscar los productos"});
    }
   
}

module.exports = {getProductsByFilters}