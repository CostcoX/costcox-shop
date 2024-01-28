import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { from, of } from "rxjs";
import * as productActions from "../reducers/products/productActions";
import * as productApi from "../../apiServices/productApi";

export const getCategoriesEpic = (action$) => {
  return action$.pipe(
    ofType(productActions.GET_ALL_CATEGORIES),
    mergeMap(({ type, payload }) => {
      return productApi.getCategories().pipe(
        mergeMap((respone) => {
          return of(productActions.getAllCategoriesSuccess(respone));
        }),
        catchError((e) => console.log(e))
      );
    })
  );
};

export const getAllProductsEpic = (action$) => {
  return action$.pipe(
    ofType(productActions.GET_ALL_PRODUCTS),
    mergeMap(({ type, payload }) => {
      console.log("getAllProductsEpic called");
      return from([]);
    })
  );
};

export default combineEpics(getCategoriesEpic, getAllProductsEpic);
