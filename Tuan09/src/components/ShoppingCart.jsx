import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../store/slices/cartSlice';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Laptop Gaming Asus ROG",
    price: 25990000,
    image: "https://dlcdnwebimgs.asus.com/gain/28BC6A33-ABAE-4727-BC1F-B20625FD8304/w1000/h732",
    description: "AMD Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 34990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    description: "256GB, Titan Blue, A17 Pro"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 31990000,
    image: "https://images.samsung.com/vn/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-mo.jpg",
    description: "256GB, Titanium Gray, Snapdragon 8 Gen 3"
  },
  {
    id: 4,
    name: "iPad Pro M2",
    price: 23990000,
    image: "https://cdn.tgdd.vn/Products/Images/522/294105/ipad-pro-m2-11-inch-wifi-xam-thumb-600x600.jpg",
    description: "11-inch, 256GB, WiFi, Space Gray"
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 12990000,
    image: "https://cdn.tgdd.vn/Products/Images/7077/289804/apple-watch-s9-41mm-vien-nhom-day-cao-su-trang-thumb-1-600x600.jpg",
    description: "GPS, 41mm, Aluminum Case"
  },
  {
    id: 6,
    name: "AirPods Pro 2",
    price: 6990000,
    image: "https://cdn.tgdd.vn/Products/Images/54/289781/airpods-pro-2-thumb-600x600.jpg",
    description: "Active Noise Cancellation, Spatial Audio"
  },
  {
    id: 7,
    name: "MacBook Air M2",
    price: 29990000,
    image: "https://cdn.tgdd.vn/Products/Images/44/282827/macbook-air-m2-2022-vang-thumb-600x600.jpg",
    description: "13.6-inch, 8GB RAM, 256GB SSD"
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    price: 8990000,
    image: "https://cdn.tgdd.vn/Products/Images/54/286654/tai-nghe-bluetooth-sony-wh-1000xm5-thumb-1-600x600.jpeg",
    description: "Wireless Noise Cancelling Headphones"
  }
];

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="shopping-cart">
      <div className="store-section">
        <h2>Sản phẩm</h2>
        <div className="products-grid">
          {SAMPLE_PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price.toLocaleString()}đ</p>
                <button onClick={() => handleAddToCart(product)}>
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartItems.length > 0 && (
        <div className="cart-section">
          <h2>Giỏ hàng ({totalItems} sản phẩm)</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price.toLocaleString()}đ</p>
                </div>
                <div className="cart-item-actions">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 1 }))
                    }
                  />
                  <button onClick={() => dispatch(removeItem(item.id))}>Xóa</button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Tổng tiền: {total.toLocaleString()}đ</h3>
              <button className="checkout-button">Thanh toán</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart; 