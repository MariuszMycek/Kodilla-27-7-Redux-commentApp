import React from 'react';
import Comment from './CommentContainer';
import './CommentsList.css';

const CommentsList = ({
  comments,
  addComment,
  commentIsEdited,
  buttonsDisabled
}) => (
  <div className='CommentListWrapper'>
    <button
      onClick={() => {
        addComment('');
        commentIsEdited();
      }}
      disabled={buttonsDisabled}
    >
      Add Comment
    </button>
    <ul className='CommentList'>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
  </div>
);

export default CommentsList;
