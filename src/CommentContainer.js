import { connect } from 'react-redux';
import Comment from './Comment';
import {
  thumbUpComment,
  thumbDownComment,
  removeComment,
  editComment,
  commentIsEdited,
  commentIsNotEdited
} from './actions';

const mapStateToProps = state => ({
  buttonsDisabled: state.commentsListButtons.buttonsDisabled
});

const mapDispatchToProps = dispatch => {
  return {
    thumbUpComment: id => dispatch(thumbUpComment(id)),
    thumbDownComment: id => dispatch(thumbDownComment(id)),
    removeComment: id => dispatch(removeComment(id)),
    editComment: (id, text) => dispatch(editComment(id, text)),
    commentIsEdited: () => dispatch(commentIsEdited()),
    commentIsNotEdited: () => dispatch(commentIsNotEdited())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
