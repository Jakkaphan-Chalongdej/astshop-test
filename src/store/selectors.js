import { VISIBILITY_FILTERS } from "../static/constants";



export const getProduct = (store) => store.products;
export const getProductPriceFilter = (store) => store.priceFilter;
export const getWishlist = (store) => store.wishlist;

export const getProductsByFilter = (store, visibilityFilter, count = null,getproduct) => {
  
  
  const allProducts = getProduct(store);
  const filterPrices = getProductPriceFilter(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.CAMERA:
      console.log("CAMERA");
      // case VISIBILITY_FILTERS.:
      // case VISIBILITY_FILTERS.:
      return allProducts.filter(
        (product) =>
          product.category === visibilityFilter &&
          product.price < filterPrices.pricerange,
        console.log(visibilityFilter)
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allProducts.filter((product, index) => {
          if (product.sale === true && "true" && index < 6) {
            return true;
          }
          return true;
        });
      } else {
        return allProducts.filter(
          (product) =>
            product.sale === true && "true" && product.price < filterPrices.pricerange
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allProducts.filter((products) => {
        return products.price < filterPrices.pricerange;
      });
  }
};

export const getUsedCurrency = (store) => store.usedCurrency;
