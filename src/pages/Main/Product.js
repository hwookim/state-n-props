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
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">상품평</div>
        <div className="review">
          <div className="user">
            <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} />
            <div className="userInfo">
              <div className="name">위코드</div>
              <div className="itemName">골프공, white 색상 구매</div>
            </div>
          </div>
          <div className="reviewTitle">배송도 빠르고 정말 좋아요.</div>
          <div className="reviewMain">
            {isReviewOpen && (
              <div className="reviewMainContents">
                주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
                <br />
                다음에도 필요하면 또 여기서 시킬 것 같아요.
              </div>
            )}
            <span className="reviewMainHandler" onClick={handleToggleReview}>
              {isReviewOpen ? '접기' : '더보기'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
