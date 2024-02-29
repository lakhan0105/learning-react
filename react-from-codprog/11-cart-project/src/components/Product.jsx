import { useCartContext } from "../context/CartProvider";

function Product({ id, title, price, img }) {
  const newItem = {
    id,
    title,
    price,
    img,
    count: 1,
  };

  const { handleAddToCart } = useCartContext();

  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="info">
        <p className="product-title">{title}</p>
        <p className="product-price">₹{price}</p>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={() => {
          handleAddToCart(newItem);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
