import React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const goToFirstPage = () => {
    handlePageChange(1);
  };

  const goToLastPage = () => {
    handlePageChange(totalPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
        <button 
        className='text-gray-600 mx-2 p-1 bg-gray-100 hover:bg-verde hover:text-white hover:font-bold rounded-md' onClick={goToFirstPage} disabled={currentPage === 1}
        > 
            <MdKeyboardDoubleArrowLeft /> 
        </button>
      
        <button 
        className='text-gray-600 mx-2 p-1 bg-gray-100 hover:bg-verde hover:text-white hover:font-bold rounded-md' onClick={goToPreviousPage} disabled={currentPage === 1}
        > 
            <MdKeyboardArrowLeft /> 
        </button>
      
        <span 
        className='text-sm font-semibold mx-3 text-gray-600'
        >
            Pág. {currentPage}/{totalPages}
        </span>
      
        <button 
        className='text-gray-600 mx-2 p-1 bg-gray-100 hover:bg-verde hover:text-white hover:font-bold rounded-md' onClick={goToNextPage} disabled={currentPage === totalPages}
        > 
            <MdKeyboardArrowRight /> 
        </button>
      
        <button 
        className='text-gray-600 mx-2 p-1 bg-gray-100 hover:bg-verde hover:text-white hover:font-bold rounded-md' onClick={goToLastPage} disabled={currentPage === totalPages}
        > 
            <MdKeyboardDoubleArrowRight /> 
        </button>
    </div>
  );
};

export default Pagination;