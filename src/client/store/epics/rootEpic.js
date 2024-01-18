import { combineEpics } from "redux-observable";
import productEpic from "./productEpic";

const rootEpic = combineEpics(productEpic);

export default rootEpic;
