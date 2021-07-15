import { ADD_CART_ITEM, REMOVE_CART_ITEM, SET_FILTER } from "./actionType";

export const addToCart = (payload) => ({
  type: ADD_CART_ITEM,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload,
});

export const setFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});

