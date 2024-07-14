export default function ProductCard(props) {
    const { product } = props;

    // Determine the class and text based on quantity
    const quantityClass = product.quantity === 1 ? 'yellow' :product.quantity === 0 ?'red' : '';
    const quantityText = product.quantity === 0 ? 'Out of Stock' :product.quantity === 1 ? `${product.quantity} Left In Stock`:"available";

    return (
        <div className="product__item">
            <div className="product__banner">
                <a className="product__images">
                    <img src={product.image} alt="" className="product__img default" />
                    <img src={product.image} alt="" className="product__img hover" />
                </a>

                <div className="product__badge light-green">{product.category}</div>
            </div>
            <div className="product__content">
                <span className="product__category">{product.category}</span>
                <a>
                    <h3 className="product__title">{product.code}</h3>
                </a>
                <div className="product__price flex">
                    <span className="new__price">{product.price} L.E</span>
                </div>
                <div className={`product__price flex ${quantityClass}`}>
                    <span className={`new__price  ${quantityClass}`}>{quantityText}</span>
                </div>
            </div>
        </div>
    );
}
