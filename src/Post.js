import React, {Component} from 'react'

import LikeCounter from './LikeCounter'


class Post extends Component {
  


  constructor(props) {
    super(props);
    this.newComment = this.newComment.bind(this)
    this.onCommentInput = this.onCommentInput.bind(this)
    this.onAuthorInput = this.onAuthorInput.bind(this)
    this.state = {
      comments:[],
      newPostBody: '',
      newAuthorBody: '',
    }
  }

  newComment() { 
    const newState = Object.assign({}, this.state);
    if (this.state.newAuthorBody != '' && this.state.newPostBody != '') {
      newState.comments.push({author : this.state.newAuthorBody, post: this.state.newPostBody});
      newState.newPostBody = '';
      newState.newAuthorBody = '';
      this.setState(newState);
    }
  }

  onCommentInput(event) { 
    this.setState({
      newPostBody: event.target.value
    })
  }

  onAuthorInput(event) {
    this.setState({
      newAuthorBody: event.target.value    
    })
  }


  render() { 
    if (this.props.depth <= 0) {
      return null;
    } else if (this.props.depth == 1) {
      return (
        <React.Fragment>
          <div className = "panel panel-default">
            <div class = "panel-heading">
                {'Author: ' + this.props.authorBody}
            </div>
            <div className = "panel-body">
              {'Post: ' + this.props.postBody}
            </div>
          </div>
          <div>
            { 
                this.state.comments.map((comment, index) => {
                  return (
                    <div className = "container">
                      <div className = "row">
                        <div className = "col-8">
                          <Post key={index} authorBody={comment.author} postBody={comment.post} depth={this.props.depth - 1} />
                        </div>
                        <div className = "col-1">
                          <LikeCounter />
                        </div>
                      </div>
                    </div>
                  )
                })
            } 
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className = "panel panel-default">
            <div class = "panel-heading">
                {'Author: ' + this.props.authorBody}
            </div>
            <div className = "panel-body">
              {'Post: ' + this.props.postBody}
            </div>
          </div>
          <div>
            { 
                this.state.comments.map((comment, index) => {
                  return (
                    <div className = "container">
                      <div className = "row">
                        <div className = "col-8">
                          <Post key={index} authorBody={comment.author} postBody={comment.post} depth={this.props.depth - 1} />
                        </div>
                        <div className = "col-1">
                          <LikeCounter />
                        </div>
                      </div>
                    </div>
                  )
                })
            } 
          </div>
          <div>
            <label for="authorTextArea">Author</label>
            <textarea className= "form-control author-editor-input" id = "authorTextArea" value = {this.state.newAuthorBody} onChange = {this.onAuthorInput} />
            <label for="postTextArea">Comment</label>
            <textarea className="form-control post-editor-input" id = "postTextArea" value = {this.state.newPostBody} onChange = {this.onCommentInput} />
            <button className = "btn btn-success post-editor-button" onClick = {this.newComment}>Post</button>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Post