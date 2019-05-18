import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const COMMENT_IS_EDITED = 'COMMENT_IS_EDITED';
export const COMMENT_IS_NOT_EDITED = 'COMMENT_IS_NOT_EDITED';

//Adding comment
export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text
  };
}

//Edit comment
export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
}

//Remove comment
export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

//Thumb up comment
export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

//Thumb down comment
export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}

//Is edited
export function commentIsEdited() {
  return {
    type: COMMENT_IS_EDITED
  };
}

//Is not edited
export function commentIsNotEdited() {
  return {
    type: COMMENT_IS_NOT_EDITED
  };
}
