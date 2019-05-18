import {
  ADD_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT,
  COMMENT_IS_EDITED,
  COMMENT_IS_NOT_EDITED
} from './actions';

export default function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          id: action.id,
          text: action.text,
          votes: 0,
          disabledButtons: false
        },
        ...state
      ];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          comment.text = action.text;
        }
        // comment.disabledButtons = false;
        return comment;
      });

    case THUMB_UP_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          comment.votes++;
        }
        return comment;
      });

    case THUMB_DOWN_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          comment.votes--;
        }
        return comment;
      });

    case COMMENT_IS_EDITED:
      return state.map(comment => {
        comment.disabledButtons = true;
        return comment;
      });

    case COMMENT_IS_NOT_EDITED:
      return state.map(comment => {
        comment.disabledButtons = false;
        return comment;
      });

    default:
      return state;
  }
}
