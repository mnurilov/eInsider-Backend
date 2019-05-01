import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);

    this.state = {
      favorites : {}
    }

    axios.get('http://localhost:7000/favorites')
    .then(res => {
       const favorites = res.data;
       this.setState({favorites})
       //console.log(schedule); 
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFantasyClick = (event) => {
    console.log('Go to fantasy!');
    window.location.replace('/fantasy');
  }

  onProfileClick = (event) => {
    console.log('Go to profile');
    window.location.replace('/profile');
  }

  // onLogoutClick = (event) => {
  //   session = false;
  //   this.forceUpdate();
  // }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
        <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
            <a className="item" onClick={this.onHomeClick}>Home</a>
            <a className="item active">Favorites</a>
            <a className="item" onClick={this.onFantasyClick}>Fantasy</a>
            <a className="item" onClick={this.onProfileClick}>Profile</a>
            <div className="right menu">
                <a className="ui item" >Logout</a>
            </div>
        </div>

        <div>
          <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Favorites </h3>
          <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
          {/* <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.favorites)} </p> */}
          <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.favorites)} </p>
        </div>
      </div>
    );
  }
}

export default Favorites;
