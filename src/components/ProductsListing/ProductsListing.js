import React from "react";

import ItemCard from "../ItemCard";

function ProductsListing({
  products,
  handleDownVote,
  handleUpVote,
  handleSetFavourite,
  handleAddToCart,
  ...props
}) {
  return (
    <section className="row" {...props}>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          handleUpVote={product.handleUpVote}
          downVotes={product.votes.downVotes}
          handleDownVote={product.handleDownVote}
          isFavourite={product.isFavourite}
          handleSetFavorite={product.handleSetFavorite}
          handleAddToCart={product.handleAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
