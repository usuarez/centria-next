import { types } from "../types";


export const productsReducer = (state = {
    products: [],
    cart: [],
}, action) => {
    switch (action.type) {
        case types.loadProducts:
            return {
                ...state,
                products: [...action.payload],
                cartTotal: [],
                cart: JSON.parse(localStorage.getItem("cart")) !== null ? [...JSON.parse(localStorage.getItem("cart"))] : []
            }
        case types.updateProducts:
            return {
                ...state
            }

        case types.addToCart:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case types.removefromCart:
            return {
                ...state
            }
        case types.checkout:
            return {
                ...state
            }

        case types.setActiveProduct:
            return {
                ...state,
                activeProduct: action.payload,
            }

        case types.setItemTotal:
            return {
                ...state,
                cartTotal: state.cartTotal.filter(el => el.id === action.payload.id).length !== 1 ?
                    [...state.cartTotal, action.payload] :
                    [...state.cartTotal.map(i => i.id === action.payload.id ? Object.assign(i, action.payload.qty) : i)],
            }

        default:
            return state
    }
}