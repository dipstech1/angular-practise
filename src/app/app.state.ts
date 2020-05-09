import {Tutorial} from './models/tutorial.model';

import * as tutorialReducer  from './reducers/tutorial.reducer';

export interface AppState {
     tutorial : Tutorial[];
}