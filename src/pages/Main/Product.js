import React, { useState } from 'react';
import './Product.scss';
import ColorButton from './components/ColorButton';

const Product = () => {
  const [color, setColor] = useState('white');

  const [quantity, setQuantity] = useState(1);
  const price = 300;
  const totalPrice = price * quantity;

  const [isReviewOpen, setIsOpenReview] = useState(false);

  const handleColor = value => {
    setColor(value);
  };

  const handleQuantity = value => () => {
    const result = quantity + value;
    if (result < 1) return;
    setQuantity(result);
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  const handleToggleReview = () => {
    setIsOpenReview(prev => !prev);
  };

  return (
    <div className="product">
      <div className="productDetail">
        <img
          className="productDetailImg"
          src={`./images/golf-ball-${color}.jpg`}
          alt={`golf-ball-${color}`}
        />
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <div className="color">
            <ColorButton color="white" onClick={handleColor} />
            <ColorButton color="red" onClick={handleColor} />
            <ColorButton color="yellow" onClick={handleColor} />
          </div>
          <div className="quantity">
            <span> 수량 : </span>
            <div className="quantityHandler">
              <button onClick={handleQuantity(-1)}>-</button>
              <div className="quantityHandlerText">{quantity}</div>
              <button onClick={handleQuantity(+1)}>+</button>
            </div>
            <button className="resetBtn" onClick={resetQuantity}>
              reset
            </button>
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구해하기</button>
        </div>
      </div>
      <div className="review">
        <div className="reviewToggle" onClick={handleToggleReview}>
          {isReviewOpen ? '▼' : '▶'} 리뷰 보기 Click!
        </div>
        {isReviewOpen && <div>공이 참 예뻐요~~~~</div>}
      </div>
    </div>
  );
};

export default Product;
