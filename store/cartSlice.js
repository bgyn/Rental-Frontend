
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item:[],
        TotalQuantity:0,
        GrandPrice:0,
    },
    reducers:{
        addToCart:(state,action)=>{

            const newItem = action.payload;
            const existingItems= state.item.find((item)=>item.id==newItem.id);
            if(!existingItems){
                state.item.push({
                    id:newItem.id,
                    price:newItem.price,
                    img: newItem.img,
                    name:newItem.name,
                });
                state.TotalQuantity++;
                state.GrandPrice = state.GrandPrice + newItem.price; 
            }

        },

        removeFromCart:(state,action)=>{
            const id = action.payload.id;
            const price = action.payload.price;
            const existingItems = state.item.find((item)=> item.id == id);
            if(existingItems){
                state.item = state.item.filter((item)=>item==id);
                state.TotalQuantity--;
                state.GrandPrice = state.GrandPrice - price; 
            }
        },


    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;