"use strict"

//ADD TO CART
export const addToCart = (book) => {
  return{
    type: "ADD_TO_CART",
    payload: book
  }
}

//UPDATE CART
export const updateCart = (_id, unit, cart) => {

  //create a copy of current array of books
  const currentBookToUpdate = cart
  //Determine at which index in books array is the book to be deleted
  const indexToUpdate = currentBookToUpdate.findIndex((book) => {
    return book._id === _id
  })

  const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + unit
  }

  let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]

  return{
    type: "UPDATE_CART",
    payload:cartUpdate
  }
}

//DELETE FROM CART
export const deleteCartItem = (cart) => {
  return{
    type: "DELETE_CART_ITEM",
    payload: cart
  }
}

