import React, { useState } from 'react'


export class LikeCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
    }

    this.handleLikeClick = this.handleLikeClick.bind(this)
    this.handleDislikeClick = this.handleDislikeClick.bind(this)
  }

  handleLikeClick() {
    const { likes } = this.state
    this.setState({
      likes: likes + 1,
    })
  }

  handleDislikeClick() {
    const { likes } = this.state
    this.setState({
      likes: likes - 1,
    })
  }

  render() {
    const { count } = this.state
    return (
      <div class = "text-center">
        <button className ="btn btn-success btn-xs like-button" onClick={this.handleLikeClick}>Like</button>
        <p>{this.state.likes}</p>
        <button className ="btn btn-danger btn-xs dislike-button" onClick={this.handleDislikeClick}>Dislike</button>
      </div>
    )
  }

}

export default LikeCounter