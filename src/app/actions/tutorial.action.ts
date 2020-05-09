import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Tutorial} from '../models/tutorial.model';

export const ADD_TUTORIAL = "ADD_TUTORIAL";
export const REMOVE_TUTORIAL = "REMOVE_TUTORIAL";

export class AddTutorial {
     readonly type =  ADD_TUTORIAL;

    constructor(public payload : Tutorial){}
}

export class RemoveTutorial{
    readonly type =  REMOVE_TUTORIAL;

    constructor(public payload : number){}
}

export type Action = AddTutorial | RemoveTutorial;