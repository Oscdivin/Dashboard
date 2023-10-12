import { createSlice } from "@reduxjs/toolkit";
import React, { useState, createContext, PropsWithChildren } from 'react'

interface iData {
  globalState?: boolean;
  setGlobalState?: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState = {
  toggleState: false,
  cart: [] as any,
};
export const contextState = createContext<iData>({})

export const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
    const [globalState, setGlobalState] = useState<boolean>(false)
    return (
        <contextState.Provider value={{ globalState, setGlobalState }} >{children}</contextState.Provider>
    )
}

const globalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeState: (state, { payload }) => {
      state.toggleState = payload;
    },

    addToCart: (state, { payload }) => {
      const checkCart = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });

      if (checkCart >= 0) {
        state.cart[checkCart].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },

    remove: (state: any, { payload }) => {
      const removal = state.cart.filter((el: any) => el.id !== payload.id);
      state.cart = removal;
    },

    removeQTY: (state, { payload }) => {
      const itemQTY = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });

      if (state.cart[itemQTY].qty > 1) {
        state.cart[itemQTY].qty -= 1;
      } else if (state.cart[itemQTY].qty === 1) {
        const removal = state.cart.filter((el: any) => el.id !== payload.id);
        state.cart = removal;
      }
    },
  },

  

});

export const { changeState, addToCart, remove, removeQTY } =
  globalState.actions;

export default globalState.reducer;
