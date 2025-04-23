// ProductItem.jsx
import React from 'react';

const ProductItem = ({ product, onDelete }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price.toLocaleString()}đ</td>
            <td>{product.category}</td>
            <td>{product.stock}</td>
            <td>
                <button className="delete-button" onClick={() => onDelete(product.id)}>
                    Xoá
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
