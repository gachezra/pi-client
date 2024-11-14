import React from 'react';

const ProductCard = ({ name, description, price, pictureCaption, pictureURL, onClickBuy }) => (
  <div style={{ margin: 16, paddingBottom: 16, borderBottom: '1px solid gray' }}>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: "33%", marginRight: 8 }}>
        <img style={{ width: "100%" }} src={pictureURL} alt={name} />
      </div>
      <div style={{ width: "66%" }}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginBottom: 8 }}>
      <strong>{price} Test-π</strong> <br />
      <button onClick={onClickBuy}>Order</button>
    </div>
    <span style={{ fontSize: '0.6em' }}>{pictureCaption}</span>
  </div>
);

export default ProductCard;