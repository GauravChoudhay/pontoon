/* @flow */

export { default as actions } from './actions';
export { default as reducer } from './reducer';

export type { Tag } from './actions';
export type { ProjectState } from './reducer';


// Name of this module.
// Used as the key to store this module's reducer.
export const NAME: string = 'project';
