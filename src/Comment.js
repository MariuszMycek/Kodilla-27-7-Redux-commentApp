import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isEdited: ''
    };
  }

  editCommentHandler = () => {
    const { text, commentIsEdited } = this.props;
    this.setState({ isEdited: true, text });
    commentIsEdited();
  };

  submitHandler = e => {
    const { text } = this.state;
    const { id, editComment, commentIsNotEdited } = this.props;
    e.preventDefault();
    if (text !== '') {
      this.setState({ isEdited: false });
      editComment(id, text);
      commentIsNotEdited();
    }
  };

  cancelHandler = () => {
    const { id, removeComment, text, commentIsNotEdited } = this.props;
    if (text === '') {
      removeComment(id);
    }
    commentIsNotEdited();
    this.setState({ isEdited: false });
  };

  onchangeHandler = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return this.state.isEdited || this.props.text === ''
      ? this.renderInputForm()
      : this.renderComment();
  }

  renderComment() {
    const {
      text,
      votes,
      id,
      thumbUpComment,
      thumbDownComment,
      removeComment,
      disabledButtons
    } = this.props;
    return (
      <li className='Comment'>
        <p className='CommentText'>{text} </p>
        <span>votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)} disabled={disabledButtons}>
          Thumb up
        </button>
        <button onClick={() => thumbDownComment(id)} disabled={disabledButtons}>
          Thumb down
        </button>
        <button onClick={() => removeComment(id)} disabled={disabledButtons}>
          Remove comment
        </button>
        <button onClick={this.editCommentHandler} disabled={disabledButtons}>
          Edit comment
        </button>
      </li>
    );
  }

  renderInputForm() {
    return (
      <form action='#' className='Form'>
        <label htmlFor='commentTextArea'>Your comment: </label>
        <textarea
          className='TextField'
          placeholder='Type your comment'
          id='commentTextArea'
          value={this.state.text}
          onChange={this.onchangeHandler}
        />
        <input type='button' value='Cancel' onClick={this.cancelHandler} />
        <input type='button' value='Accept' onClick={this.submitHandler} />
      </form>
    );
  }
}

export default Comment;
