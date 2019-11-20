import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets.js';

class Tweeter extends React.Component {
  render() {
    return (
      <p>{this.props.user.screen_name}</p>
    )
  }
}

class ListItem extends React.Component {
  render() {
      return (
        <div class="card" style={{backgroundColor: "#C0DEED"}}>
            <div class="card-body">
            <img src={this.props.tweet.user.profile_image_url}></img>
              <h5 class="card-title">{this.props.tweet.user.screen_name}</h5>
              <p class="card-text" style={{color:"333333"}}>{this.props.tweet.text}</p>
              <a href="#" class="btn btn-primary">Like it?</a>
            </div>
        </div>
      );
  }
}
class App extends React.Component {
  render() {
    let twitt = this.props.tweets.map(tweet => {
      return <div>
      <ListItem tweet={tweet}></ListItem>
      <Tweeter user={tweet.user}></Tweeter>
      </div>
    })
    
    return (
      <div>

      <h1 className="text-center">Twitter just for Kanye</h1>
      <div>
        {twitt}
        
      </div>
      </div>
    );
  }
}
console.log(tweets)

const element = document.getElementById('app');

ReactDOM.render(<App tweets={tweets}/>, element );//

console.log("tweet ddddreact");