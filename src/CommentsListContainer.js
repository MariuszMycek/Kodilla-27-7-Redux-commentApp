import { connect } from 'react-redux';
import CommentsList from './CommentsList';
import { addComment, commentIsEdited } from './actions';

const mapStateToProps = state => ({
  comments: state.comments,
  buttonDisabled: state.commentsListButton.buttonDisabled
});

const mapDispatchToProps = dispatch => ({
  addComment: text => dispatch(addComment(text)),
  commentIsEdited: () => dispatch(commentIsEdited())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
