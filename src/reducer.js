import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';
import commentsListButtons from './commentsListButtons';

const reducer = combineReducers({
  comments,
  users,
  commentsListButtons
});

export default reducer;
