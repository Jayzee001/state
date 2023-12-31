import './out.css'
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // initial state that will be mount as the page loads
    this.state = {
        fullName: '',
        bio: '',
        img: 'https://i.pinimg.com/236x/b6/66/5a/b6665a5b7916210651a3636fb2ca9f64.jpg',
    occup: '',
    };
  }

  // the setState or new state thats updated 
  updateFullN = () => {
    this.setState({ fullName: "Peter Paul" });
  };

  updateBio = () => {
    this.setState({ bio:'making the world a better place' });
  };

    updateImg = () => {
    this.setState({ img:'https://i.pinimg.com/236x/84/2f/1d/842f1d9ee1df60de598e152fa045d55f.jpg' });
  };

    updateOccup = () => {
          this.setState({ occup: 'front-End engineer' });
  };
  // the update handler for thats called upon for stae to change 
    Updater = () => {
        this.updateFullN();
        this.updateBio();
        this.updateImg();
        this.updateOccup();
    }
    
  render() {
    return (
      // the element tags 
      <div className='container'>

            <h4>full Name:{this.state.fullName}</h4>
            <h4>Bio: {this.state.bio}</h4>
            <h4>image: <div className='image'><img src={this.state.img} alt={this.state.img} /></div></h4>
            <h4>Occupation: {this.state.occup}</h4>

            {/* <button onClick={this.Updater}>update state</button> */}
            
// toggle switch

    <div class = 'toggle-switch'>
    <label>
        <input onClick={this.Updater} type = 'checkbox' />
        <span class = 'slider'></span>
    </label>
</div>
    </div>
    );
}
}

export default App;
