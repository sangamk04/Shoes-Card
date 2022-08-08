import React from "react";

const ShoeCard = () => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src="" alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">name</div>
        <div data-cy="shoe-category">category</div>
      </div>
    </div>
  );
};

export default ShoeCard;
