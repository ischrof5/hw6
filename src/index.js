  
import React, {Component} from 'react'

import Post from './Post'

import LikeCounter from './LikeCounter'

import './index.css'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.newPost = this.newPost.bind(this)
    this.onPostInput = this.onPostInput.bind(this)
    this.onAuthorInput = this.onAuthorInput.bind(this)
    this.state = {
      posts:[],
      newPostBody: '',
      newAuthorBody: '',
    }
  }

  newPost() {
    const newState = Object.assign({}, this.state);
    if (this.state.newAuthorBody != '' && this.state.newPostBody != '') {
      newState.posts.push({author : this.state.newAuthorBody, post: this.state.newPostBody});
      newState.newPostBody = '';
      newState.newAuthorBody = '';
      this.setState(newState);
    }
    
  }

  onPostInput(event) { 
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
    return (
      <div>
        {
          this.state.posts.map((postComponent, index) => {
            //console.log(postBody.author)
            //console.log(postBody.post)
            return (
              <div className = "container">
                <div className = "row">
                  <div className = "col-8">
                    {
                    <Post key={index} authorBody={postComponent.author} postBody={postComponent.post} depth={3} />
                    }
                    </div>
                  <div className = "col-1">
                    <LikeCounter />
                  </div>
                </div>
              </div>
            )
          })
        }   
        <div className = "panel panel-default post-editor">
          <div className = "panel-body">
            <label for="authorTextArea">Author</label>
            <textarea className= "form-control author-editor-input" id = "authorTextArea" value = {this.state.newAuthorBody} onChange = {this.onAuthorInput} />
            <label for="postTextArea">Post</label>
            <textarea className="form-control post-editor-input" id = "postTextArea" value = {this.state.newPostBody} onChange = {this.onPostInput} />
            <button className = "btn btn-success post-editor-button" onClick = {this.newPost}>Post</button>
          </div>
        </div>
      </div>
    );
  }
    
}

export default App