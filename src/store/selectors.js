import { VISIBILITY_FILTERS } from "../static/constants";

export const getProduct = (store) => store.product.products;
export const getProductPriceFilter = (store) => store.product.priceFilter;
export const getWishlist = (store) => store.product.wishlist;
export const getUsedCurrency = (store) => store.product.usedCurrency;

export const getProductsByFilter = (store, visibilityFilter, count = null) => {
  const allProducts = getProduct(store);
  const filterPrices = getProductPriceFilter(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.SECURITY:
    case VISIBILITY_FILTERS.HOME:
    case VISIBILITY_FILTERS.OFFICE:
    case VISIBILITY_FILTERS.OTHER:
      return allProducts.filter(
        (product) =>
          product.category === visibilityFilter &&
          product.price < filterPrices.pricerange,
        console.log(visibilityFilter)
      );
    case VISIBILITY_FILTERS.CAMERA:
      // case VISIBILITY_FILTERS.:
      // case VISIBILITY_FILTERS.:
      return allProducts.filter(
        (product) =>
          product.subcategory === visibilityFilter &&
          product.price < filterPrices.pricerange,
        console.log(visibilityFilter)
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allProducts.filter((product, index) => {
          if ((product.sale === "true" || product.sale === true) && index < 20) {
            return true;
          }
          return false;
        });
      } else {
        return allProducts.filter(
          (product) =>
            (product.sale === "true" &&
              product.price < filterPrices.pricerange) ||
            (product.sale === true && product.price < filterPrices.pricerange)
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allProducts.filter((products) => {
        return products.price < filterPrices.pricerange;
      });
  }
};
