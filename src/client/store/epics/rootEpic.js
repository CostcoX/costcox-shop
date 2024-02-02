import { combineEpics } from "redux-observable";
import globalEpic from "./globalEpic";
import productEpic from "./productEpic";

const rootEpic = combineEpics(globalEpic, productEpic);

export default rootEpic;
