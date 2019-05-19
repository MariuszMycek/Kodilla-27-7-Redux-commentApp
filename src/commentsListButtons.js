import { COMMENT_IS_EDITED, COMMENT_IS_NOT_EDITED } from './actions';

export default function commentsListButtons(
  state = { buttonsDisabled: false },
  action
) {
  switch (action.type) {
    case COMMENT_IS_EDITED:
      return Object.assign({}, state, {
        buttonsDisabled: true
      });

    case COMMENT_IS_NOT_EDITED:
      return Object.assign({}, state, {
        buttonsDisabled: false
      });

    default:
      return state;
  }
}
