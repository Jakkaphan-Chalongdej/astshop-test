import { VISIBILITY_FILTERS } from "../static/constants";
import { getProducts } from "./actions/product";


// export let getProduct = getProducts();
export const getProduct = (store) => store.products;
export const getProductPriceFilter = (store) => store.priceFilter;
export const getWishlist = (store) => store.wishlist;

export const getProductsByFilter = (store, visibilityFilter, count = null) => {
  const allProducts = getProduct(store);
  // let allProducts = getProduct();
  const filterPrices = getProductPriceFilter(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.CAMERA:
    // case VISIBILITY_FILTERS.WOMEN:
    // case VISIBILITY_FILTERS.KIDS:
      return allProducts.filter(
        (product) =>
          product.category === visibilityFilter &&
          product.price < filterPrices.pricerange
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allProducts.filter((product, index) => {
          if (product.sale === true && index < 6) {
            return true;
          }
          return false;
        });
      } else {
        return allProducts.filter(
          (product) =>
            product.sale === true && product.price < filterPrices.pricerange
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allProducts.filter((product) => {
        return product.price < filterPrices.pricerange;
      });
  }
};

export const getUsedCurrency = (store) => store.usedCurrency;