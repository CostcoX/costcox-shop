import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import * as globalActions from "../reducers/global/globalActions";
