import { createAsyncAction, createAction } from 'typesafe-actions';
import { User } from 'MyModels';

export const searchUsersAsync = createAsyncAction(
    'searchUsers/request',
    'searchUsers/success',
    'searchUsers/error'
)<string, User[], undefined>();

export const getUserByIdAsync = createAsyncAction(
    'getUserById/request',
    'getUserById/success',
    'getUserById/error'
)<number, User, undefined>();

export const resetSelectedUser = createAction('user/reset');
