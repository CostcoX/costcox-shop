import { createAction } from "@reduxjs/toolkit";

// Action Names
export const GET_ALL_PRODUCTS = "products/GET_ALL_PRODUCTS";
export const GET_RECOMMENDED_PRODUCTS = "products/GET_RECOMMENDED_PRODUCTS";

// Action Creators
export const getAllProducts = createAction(GET_ALL_PRODUCTS);
export const getRecommendedProducts = createAction(GET_RECOMMENDED_PRODUCTS);
