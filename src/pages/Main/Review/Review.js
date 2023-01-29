import React, { useState } from 'react';
import './Review.scss';

const Review = props => {
  const [isReviewOpen, setIsOpenReview] = useState(false);

  const handleToggleReview = () => {
    setIsOpenReview(prev => !prev);
  };
  return (
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
  );
};

export default Review;
