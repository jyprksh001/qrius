import React, { Component } from 'react';
import './main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import axios from 'axios';


    


class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      active: [],
      paused:[]
    }

    axios.get('1.json',{
      transformResponse:(data)=>{
        console.log(data)
        return JSON.parse(data)
      }
    })
    .then(res => {
      console.log(res.data)
      this.setState({
           active:res.data.active,
           paused:res.data.paused
      });  
    })    
  }

  render() {
    return (
      <div> 
      <div class="w30 left-nav">
        <div class="logo">
          <img class="w30" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/4355124-7cf10f4c4f5057da85b5eec9663e129e-medium_jpg.jpg?buster=1499778717"/>
          <span>Qrius</span>
        </div>
        <div class="ms">
          M & S
        </div>
        <div class="center">EST 1884 </div>
        <div>
          <ul class="list">
            <li>Overview</li>
            <li>Boardcast</li>
            <li>Audience</li>
            <li>Growth tools</li>
            <li>Social tools</li>
          </ul>
        </div>
        <div>
          <ul class="list">
            <li>Settings</li>
            <li>Preferences</li>
          </ul>
        </div>
      </div>
      <div class="right-nav">
        <input type="text" class="search" placeholder="search"/> 
        <div class="board">Boardcast</div>
        <div class="pad15">
          <input type="button" class="btn bbtn" value="Boardcast"/>
          <div class="date"><span>Dec 6, 2017 - Dec 7,2017</span></div>
          <div class="download">Download</div> 
        </div>
        <div class="pad15">
          <table>
            <tr>
              <th>Boardcast Name</th>
              <th>Open Rate</th>
              <th>Click Rate</th>
            </tr>
            <tr>
              <td colspan="3">Active</td>
            </tr>
              {this.state.active.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.open}</td>
                  <td>{item.click}</td>
                </tr>
              ))}
            <tr>
              <td colspan="3">Active</td>
            </tr>
           {this.state.paused.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.open}</td>
                  <td>{item.click}</td>
                </tr>
            ))} 
          </table>
          <div  class="right-div">
            <MuiThemeProvider>
              <Tabs>
                <Tab label="Item One" >
                  <div>
                    <h2>Tab One</h2>
                    <p>
                      This is an example tab.
                    </p>
                    <p>
                      You can put any sort of HTML or react component in here. It even keeps the component state!
                    </p>
                  </div>
                </Tab>
                <Tab label="Item Two" >
                  <div>
                    <h2>Tab Two</h2>
                   <img src="https://get.google.com/apptips/data/en/images/10015380.png" class="w100"/>
                  </div>
                </Tab>
                <Tab
                  label="onActive"
                >
                  <div>
                    <h2>Tab Three</h2>
                    <p>
                      This is a third example tab.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </MuiThemeProvider>
          </div> 
        </div> 
      </div> 
      </div>

    );
  }
}

export default App;
