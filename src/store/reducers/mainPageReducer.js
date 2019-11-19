import { books } from "../../datas/datas";
import { OPEN_CART, CLOSE_CART, LEARN_MORE } from "./../constants/action-names";

let initialState = {
  books,
  cartIsOpen: false,
  openBookInfo: false, //sranov vor inchvor ban bacenq-pagenq
  openedBookInfo: null //sa el datana grqi (learn more)
};

let mainPageReducer = (state = initialState, action) => {
  let { openedBookInfo, books } = state;
  switch (action.type) {
    case OPEN_CART:
      return { ...state, cartIsOpen: true }; // ...state enq anum vor mnacac property-nere chkoren
    case CLOSE_CART:
      return { ...state, cartIsOpen: false }; // ...state enq anum vor mnacac property-nere chkoren
    case LEARN_MORE:
      books.forEach(
        //loop enq frum u  mer sxmac grqi id-ov girq-e dnumenq  openedBookInfo i mej
        book => book.id === action.book_id && (openedBookInfo = { ...book })
      );

      return { ...state, openBookInfo: true, openedBookInfo }; // ...state enq anum vor mnacac property-nere chkoren
    default:
      return state;
  }
};

export { mainPageReducer };
