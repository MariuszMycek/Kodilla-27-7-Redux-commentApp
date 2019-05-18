import React from 'react';
import Comment from './CommentContainer';
import './CommentsList.css';

const CommentsList = ({
  comments,
  addComment,
  commentIsEdited,
  buttonDisabled
}) => (
  <div className='CommentListWrapper'>
    <button
      onClick={() => {
        addComment('');
        commentIsEdited();
        console.log(buttonDisabled);
      }}
      disabled={buttonDisabled}
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
