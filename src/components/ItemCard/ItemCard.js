import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
  return <hr className="ItemCard__divider" />;
}

function ItemCard({
  id,
  img,
  title,
  shortDescription,
  isFavourite,
  upVotes,
  downVotes,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
}) {
  function onDownVote() {
    handleDownVote(id);
  }
  function onUpVote() {
    handleUpVote(id);
  }
  function onSetFavorite() {
    handleSetFavorite(id);
  }
  function onAddToCart() {
    handleAddToCart(id);
  }

  return (
    <article className="item-card col col-12 col-md-6 col-lg-4">
      <img src={img} className="lll" alt={title} />
      <h1>{title}</h1>
      <p>{shortDescription}</p>
      <div handleClick={onDownVote} downVotes={downVotes}>
        hello
      </div>
      <div handleClick={onUpVote} upVotes={upVotes}>
        hello
      </div>
      <div handleClick={onSetFavorite}>hello</div>
      <div handleClick={onAddToCart} handleAddToCart={handleAddToCart}>
        hello
      </div>
      <Divider />
      <Button name="up vote product" />
      <Button name="add to cart" />
      <IconButton />
      <FavoriteIconButton isFavourite={isFavourite} />
      <ThumbDown />
      <ThumbUp />
    </article>
  );
}

export default ItemCard;
