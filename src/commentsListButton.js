import { COMMENT_IS_EDITED, COMMENT_IS_NOT_EDITED } from './actions';

export default function commentsListButton(
  state = { buttonDisabled: false },
  action
) {
  switch (action.type) {
    case COMMENT_IS_EDITED:
      return Object.assign({}, state, {
        buttonDisabled: true
      });

    case COMMENT_IS_NOT_EDITED:
      return Object.assign({}, state, {
        buttonDisabled: false
      });

    default:
      return state;
  }
}
