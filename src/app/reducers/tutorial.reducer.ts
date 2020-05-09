import * as TutorialAction from '../actions/tutorial.action';
import {Tutorial} from '../models/tutorial.model';

export const initialState : Tutorial = {
    name : "Test",
    url:"http:localhost"
}


export function reducer(state:Tutorial[] = [initialState], action : TutorialAction.Action) {

    switch(action.type){
        case TutorialAction.ADD_TUTORIAL:
            return [...state, action.payload];
        default:
            return state;
    }

}