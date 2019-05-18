import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';
import commentsListButton from './commentsListButton';

const reducer = combineReducers({
  comments,
  users,
  commentsListButton
});

export default reducer;
