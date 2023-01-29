import React, { useState } from 'react';
import './Product.scss';
import Color from './components/Color/Color';
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
          <Color color="white" onClick={handleColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              defaultValue={1}
              onChange={handleQuantity}
              onReset={resetQuantity}
            />
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
