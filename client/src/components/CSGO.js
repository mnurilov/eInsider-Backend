import React from 'react';
import axios from 'axios';

class CSGO extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);

    axios.get('http://localhost:7000/home/csgo')
    .then(res => {
       const csgoData = res.data;
       this.setState({csgoData})
       //console.log(schedule); 
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}} onClick= {this.onHomeClick}>eInsider</h1>
        <h3 style={{textAlign: 'center'}}> Image Will Be Here </h3>
        <h1 style={{textAlign: 'center'}}> CS:GO </h1>

        <div class="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 class="ui header">Scores</h4>
          <p>Scores will be under here</p>
        </div>

        <div class="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 class="ui header">Schedule</h4>
          <p></p>
        </div>
      </div>
    );
  }
}

export default CSGO;
