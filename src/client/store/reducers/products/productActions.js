import { createAction } from "@reduxjs/toolkit";

// Action Names
export const GET_ALL_PRODUCTS = "products/GET_ALL_PRODUCTS";
export const GET_RECOMMENDED_PRODUCTS = "products/GET_RECOMMENDED_PRODUCTS";
export const GET_ALL_CATEGORIES = "products/GET_ALL_CATEGORIES";
export const GET_ALL_CATEGORIES_SUCCESS = "products/GET_ALL_CATEGORIES_SUCCESS";
export const GET_ALL_CATEGORIES_FAILURE = "products/GET_ALL_CATEGORIES_FAILURE";

// Action Creators
export const getAllProducts = createAction(GET_ALL_PRODUCTS);
export const getRecommendedProducts = createAction(GET_RECOMMENDED_PRODUCTS);
export const getAllCategories = createAction(GET_ALL_CATEGORIES);
export const getAllCategoriesSuccess = createAction(GET_ALL_CATEGORIES_SUCCESS);
export const getAllCategoriesFailure = createAction(GET_ALL_CATEGORIES_FAILURE);
