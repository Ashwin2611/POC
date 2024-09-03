import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice=createSlice({
    name:"items",
    initialState:{value:{idCategory:"", price:0,quantity:0,strCategory:"",strCategoryDescription:"",strCategoryThumb:"",total:0}},
    reducers:{
        addItem:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {addItem}=ItemSlice.actions
export default ItemSlice.reducer