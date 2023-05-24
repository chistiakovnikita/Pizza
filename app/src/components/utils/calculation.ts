import { CartProductTypes } from "../../redux/slices/cartSlice"





export const calcTotalPrice = (products:CartProductTypes[]) => {
    return products.reduce((acc,item) => item.price * item.count + acc, 0)
}

export const calcTotalCount = (products:CartProductTypes[]) => {
    return products.reduce((acc,item) => item.count + acc, 0)
}
