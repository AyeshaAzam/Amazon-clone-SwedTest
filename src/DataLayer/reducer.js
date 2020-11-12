// this is how the dataLayer look like in the begaining
export const initialState = {
  basket: [],
  user: null,
};

//ACTION--> can be like, add item in the basket
// or remove item from the basket... and so on
const reducer = (state, action) => {
  //console.log("state + action", state, action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      //login for adding item to basket
      //Return whatever the state currently was , and also return the basket with new item in it
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // case "EMPTY_BASKET":
    //   return {
    //     ...state,
    //     basket: [],
    //   };

    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket

      //go and find the index of the basket,
      // so go and check all of the basket item in the basket
      //and check if that id matches the action.id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // coping the basket into newBasket
      let newBasket = [...state.basket];

      if (index >= 0) {
        //item exists in basket, remove it
        // so if item found in that newBasket then cut it
        newBasket.splice(index, 1);
      } else {
        console.log(`Can't remove product(id: ${action.id}) as its not there`);
      }

      //how the new state look likes , we have to return that always
      return {
        ...state,
        basket: newBasket,
      }; // setting the newBasket to basket

    default:
      // return the original state the data was as in the bagining
      return state;
  }
};
export default reducer;
