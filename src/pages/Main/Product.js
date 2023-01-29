import React, { useState } from 'react';
import './Product.scss';
import ColorButton from './components/ColorButton/ColorButton';
import Review from './components/Review/Review';
import Count from './components/Count/Count';

const Product = () => {
  const [color, setColor] = useState('white');

  const [quantity, setQuantity] = useState(1);
  const price = 300;
  const totalPrice = price * quantity;

  const handleColor = value => {
    setColor(value);
  };

  const handleQuantity = value => {
    setQuantity(value);
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  return (
    <div className="product">
      <div className="productDetail">
        <img
          className="productDetailImg"
          src={`${process.env.PUBLIC_URL}/images/golf-ball-${color}.jpg`}
          alt={`golf-ball-${color}`}
        />
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <div className="color">
            <span>색상 : {color} </span>
            <div className="colorHandler">
              <ColorButton color="white" onClick={handleColor} />
              <ColorButton color="red" onClick={handleColor} />
              <ColorButton color="yellow" onClick={handleColor} />
            </div>
          </div>
          <div className="quantity">
            <span> 수량 : </span>
            <Count onChange={handleQuantity} onReset={resetQuantity} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">상품평</div>
        <Review />
      </div>
    </div>
  );
};

export default Product;
