import React from "react";
import ShowList from "./ShowList.jsx";

export default function Listing(props) {
  const { data } = props;

  return (
    <div className="item-list">
      {data.map((item) => (
        <ShowList item={item} key={item.listing_id} />
      ))}
    </div>
  );
}
