import { OPEN_CART, CLOSE_CART, LEARN_MORE } from "./../constants/action-names";

 const toggleCart = isCartOpen =>
  isCartOpen ? { type: CLOSE_CART } : { type: OPEN_CART };

 const learnMore = (id) => ({ type: LEARN_MORE, book_id:id });

 export { toggleCart, learnMore };
