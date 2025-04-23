import React from 'react';
import '../ProductList.css'; // Nhớ import file CSS

const sampleProducts = [
    { id: 1, name: 'Áo thun nam', price: 150000, category: 'Thời trang', stock: 20 },
    { id: 2, name: 'Laptop Dell XPS', price: 32000000, category: 'Công nghệ', stock: 5 },
    { id: 3, name: 'Máy hút bụi Electrolux', price: 2200000, category: 'Gia dụng', stock: 8 },
    { id: 4, name: 'Giày sneaker nữ', price: 750000, category: 'Thời trang', stock: 15 },
    { id: 5, name: 'Smartphone Samsung A54', price: 7800000, category: 'Công nghệ', stock: 12 },
    { id: 6, name: 'Bàn ủi hơi nước', price: 540000, category: 'Gia dụng', stock: 9 },
    { id: 7, name: 'Quần jeans nam', price: 450000, category: 'Thời trang', stock: 25 },
    { id: 8, name: 'Tai nghe Bluetooth Sony', price: 1450000, category: 'Công nghệ', stock: 10 },
    { id: 9, name: 'Nồi chiên không dầu', price: 1800000, category: 'Gia dụng', stock: 6 },
    { id: 10, name: 'Áo khoác nữ', price: 650000, category: 'Thời trang', stock: 18 },
];

const ProductList = () => {
    return (
        <div className="product-container">
            <h2 className="product-title">Danh sách sản phẩm</h2>
            <div className="table-wrapper">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Danh mục</th>
                            <th>Tồn kho</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price.toLocaleString()}đ</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button className="delete-button">Xoá</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
