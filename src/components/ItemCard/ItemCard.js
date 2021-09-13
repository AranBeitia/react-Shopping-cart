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
      <header>
        <img src={img} className="item-card__image" alt={title} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavourite={isFavourite}
        />
        <h2>{title}</h2>
      </header>

      <Divider />
      <p>{shortDescription}</p>
      <Divider />
      <footer className="d-flex">
        <IconButton aria-label="down vote product" handleClick={onDownVote}>
          <ThumbDown />
        </IconButton>
        <p>{downVotes.currentValue}</p>
        <IconButton aria-label="up vote product" handleClick={onUpVote}>
          <ThumbUp />
        </IconButton>
        <p>{upVotes.currentValue}</p>
        <Button name="add to cart" onClick={onAddToCart}>
          Add to cart
        </Button>
      </footer>
    </article>
  );
}

export default ItemCard;
