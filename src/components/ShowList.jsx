import React from "react";
import classnames from "classnames";

export default function ShowList(props) {
  const { item } = props;

  const title =
    item.title.length > 50 ? `${item.title.substring(49)}...` : item.title;

  if (item.currency_code === "USD") {
    item.currency_code = "$";
  } else if (item.currency_code === "EUR") {
    item.currency_code = "€";
  }

  let level = "level-high";

  if (item.quantity <= 10) {
    level = "level-low";
  } else if (item.quantity > 10 && item.quantity <= 20) {
    level = "level-medium";
  }

  const className = classnames("item-quantity", level);

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.listing_id} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">
          {item.currency_code}
          {item.price}
        </p>
        <p className={className}>{item.quantity}</p>
      </div>
    </div>
  );
}
