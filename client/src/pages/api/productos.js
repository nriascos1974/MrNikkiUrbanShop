const API_URL = "http://localhost:3000/api";
import axios from "axios";

export default async function handler(req, res) {
    try {
      const { categoria, subcategoria, priceMin, priceMax, name, status, sort_by, page, all } = req.query;
      let productosFiltrados = [];
  


      if(all){
        const  response  = await fetch(`${API_URL}/items`)
        const data = await response.json();
        const cantidad = data.products.length
        res.status(200).json({productos:[...data.products],cantidad:cantidad});
    }
  
      if (categoria !== 'undefined' ) {
        // Si se proporciona la categoría, filtrar los productos por categoría
        productosFiltrados.push('filtrados por categoria' + ' ' + categoria.toUpperCase() + ' ' + 'y subcategoria' + ' ' + subcategoria.toUpperCase())
      } 
  
      if (priceMin !== '0') {
        // Si se proporciona el precio mínimo, filtrar los productos por precio mínimo
        productosFiltrados.push(`filtrado por PRECIO MINIMO ${priceMin}`);
      }
  
      if (priceMax !== '100') {
        // Si se proporciona el precio máximo, filtrar los productos por precio máximo
        productosFiltrados.push(`filtrado por PRECIO MAXIMO ${priceMax}`);
      }
      if (name) {
        // Si se proporciona el precio máximo, filtrar los productos por precio máximo
        productosFiltrados.push(`filtrado por nombre ${name.toUpperCase()}`);
      }
  
      if (status) {
        // Si se proporciona el estado, filtrar los productos por estado
        productosFiltrados.push(`filtrado por status ${status.toUpperCase()}`);
      }
  
      if (sort_by !== 'default') {
        // Si se proporciona el ordenamiento, ordenar los productos
        productosFiltrados.push(`Ordenamiento por ${sort_by.toUpperCase()}`);
      }
  
      if (page > 1) {
        // Si se proporciona la página, paginar los productos
        productosFiltrados.push(`Paginado ${page}`);
      }
  
      res.status(200).json({
        productos: [`Devuelve los productos filtrados: ${productosFiltrados}`],
      });
    } catch (e) {
      // Manejar errores
    }
  }