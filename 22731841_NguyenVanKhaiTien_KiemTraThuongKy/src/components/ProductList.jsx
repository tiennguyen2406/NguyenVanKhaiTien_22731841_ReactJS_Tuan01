import React, { useState } from 'react';
import '../ProductList.css';

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
    const [products, setProducts] = useState(sampleProducts);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', stock: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const product = {
            id: Date.now(),
            ...newProduct,
            price: parseInt(newProduct.price),
            stock: parseInt(newProduct.stock),
        };

        setProducts([...products, product]);
        setNewProduct({ name: '', price: '', category: '', stock: '' });
        setShowModal(false);
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="product-container">
            <h2 className="product-title">Danh sách sản phẩm</h2>
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm theo tên"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="add-product-button" onClick={() => setShowModal(true)}>Thêm sản phẩm</button>
            
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
                        {filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price.toLocaleString()}đ</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h3>Thêm sản phẩm mới</h3>
                        <input
                            name="name"
                            placeholder="Tên sản phẩm"
                            value={newProduct.name}
                            onChange={handleInputChange}
                        />
                        <input
                            name="price"
                            type="number"
                            placeholder="Giá"
                            value={newProduct.price}
                            onChange={handleInputChange}
                        />
                        <input
                            name="category"
                            placeholder="Danh mục"
                            value={newProduct.category}
                            onChange={handleInputChange}
                        />
                        <input
                            name="stock"
                            type="number"
                            placeholder="Tồn kho"
                            value={newProduct.stock}
                            onChange={handleInputChange}
                        />
                        <div className="modal-actions">
                            <button onClick={handleAddProduct}>Thêm</button>
                            <button onClick={() => setShowModal(false)} className="cancel-btn">Hủy</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
