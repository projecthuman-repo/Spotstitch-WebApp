import React, { useState } from 'react';

/*
import PaymentWindow from './PaymentWindow';
import AddToCartButton from './AddToCartButton';
import QuantitySelector from './QuantitySelector';
import ProductDescription from './ProductDescription';
import Pricing from './Pricing';
import VendorRating from './VendorRating';
*/

function ProductDetailPage({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [showPaymentWindow, setShowPaymentWindow] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }

    function handleBuyNowClick() {
        setShowPaymentWindow(true);
    }

    function handleAddToCartClick() {
        setIsAddedToCart(true);
    }

    return (
        <div>
            <ProductDescription description={product.description} category={product.category} />
            <Pricing price={product.price} />
            <VendorRating vendor={product.vendor} rating={product.rating} />
            <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
            <div>
                <button onClick={handleBuyNowClick}>Buy Now</button>
                <AddToCartButton onClick={handleAddToCartClick} isAddedToCart={isAddedToCart} />
            </div>
            {showPaymentWindow && <PaymentWindow product={product} quantity={quantity} />}
        </div>
    );
}

export default ProductDetailPage;
