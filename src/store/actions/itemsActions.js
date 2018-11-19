import * as actionTypes from './actionTypes'

export const fetchItemsStart = () => ({
  type: actionTypes.FETCH_ITEMS_START,
})

export const fetchItemsSuccess = (items) => ({
  type: actionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
})

export const fetchItemsFailure = (error) => ({
  type: actionTypes.FETCH_ITEMS_FAILURE,
  payload: error,
})

export const removeItemStart = () => ({
  type: actionTypes.REMOVE_ITEM_START,
})

export const removeItemSuccess = (id) => ({
  type: actionTypes.REMOVE_ITEM_SUCCESS,
  payload: id,
})

export const removeItemFailure = (error) => ({
  type: actionTypes.REMOVE_ITEM_FAILURE,
  payload: error,
})

export const createItemStart = () => ({
  type: actionTypes.FETCH_ITEMS_START,
})

export const createItemSuccess = (items) => ({
  type: actionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
})

export const createItemFailure = (error) => ({
  type: actionTypes.FETCH_ITEMS_FAILURE,
  payload: error,
})

export const addItem = (item) => ({
  type: actionTypes.ADD_CREATED_ITEM_DATA,
  payload: item,
})
