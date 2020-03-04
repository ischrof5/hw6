import React, {Compnent} from 'react'

class PostEditor extends Component {
    constructor(props) {
        super(props);  
    }

    onPostInput(event) { 
        this.setState({
          newPostBody: event.target.value
        })
      }

    render() {
        return (
            <div className = "panel panel-default post-editor">
            <div className = "panel-body">
              <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange = {this.onPostInput} />
              <button className = "btn btn-success post-editor-button" onClick = {this.props.newPost}>Post</button>
            </div>
          </div>
        );
    }
}