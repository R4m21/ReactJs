import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg:''
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
            errorMsg:'Error retreiving data'
        })
      });
  }

  render() {
    const { posts,errorMsg } = this.state;
    console.log(posts[0]);
    return (
      <div>
        List of post
        {posts.length
          ? posts.map((post) => {
              return (
                <div key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              );
            })
          : null}
          {errorMsg?<div>{errorMsg}</div>:null}
      </div>
    );
  }
}

export default PostList;
