import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function Header(props){
  return(
      <div>
        <h1>Service Monitoring</h1>
      </div>
  )
}

class DevTools extends React.Component{
  render(){
    return (
    <div className='devTools'>
      <p className='bottom'>Dev Tools Live Here </p>
      <p><input id="enableInternetId" 
                type="checkbox" 
                onClick={()=> this.props.onClick()} 
                defaultChecked={this.props.internetEnabled}/> Internet Enabled </p>
    </div>
    )
  }
}

class ServicesContent extends React.Component{
  render(){
    return(
      <div id={'servicesIdTab'}>
        List Services
      </div>
    )
  }
}

class TrendsContent extends React.Component{
  render(){
    return(
      <div id={'trendsIdTab'} className='hiddenTab'>
        Trends, or History of Service Performance
      </div>
    )
  }
}

class NewServiceContent extends React.Component{
  render(){
    return(
      <div id={'newServiceIdTab'} className='hiddenTab'>
        New Service
      </div>
    )
  }
}

class ScheduleContent extends React.Component{
  render(){
    return(
      <div id={'scheduleIdTab'} className='hiddenTab'>
        Schedule
      </div>
    )
  }
}

class AboutContent extends React.Component{
  render(){
    return(
      <div id={'aboutIdTab'} className='hiddenTab'>
        About
      </div>
    )
  }
}

class Menu extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div>
    <ul id={'menuListId'}>
      <li>
        <a id={'servicesId'} 
            className="active" 
            href="#services" 
            onClick={()=> this.props.onClick('servicesId')}>Services</a>
        </li>
      <li>
        <a id={'trendsId'} 
           href="#trends" 
           onClick={()=> this.props.onClick('trendsId')} >Trends</a>
        </li>
      <li>
        <a id={'newServiceId'} href="#newService" onClick={()=> this.props.onClick('newServiceId')}>New Service</a>
        </li>
      <li>
        <a id={'scheduleId'} href="#schedule" onClick={()=> this.props.onClick('scheduleId')}>Schedule</a>
        </li>
      <li>
        <a id={'aboutId'} href="#about" onClick={()=> this.props.onClick('aboutId')}>About</a>
        </li>
    </ul>
    </div>
  )}
}

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      internetEnabled: false,
    }
  }
  render() {
    console.log("Internet toggled is now: " + this.state.internetEnabled);
    return(
    <div className="App">
      <Header />
      <Menu onClick={(i)=>this.handleMenuClick(i)}/>
      <ServicesContent/>
      <TrendsContent/>
      <NewServiceContent/>
      <ScheduleContent/>
      <AboutContent/>
      <DevTools internetEnabled={this.state.internetEnabled} 
                onClick={(i)=> this.toggleInternet(i)} />
    </div>
    )
  }

  handleMenuClick(i){
    let menuList = document.querySelector('#menuListId');
    let menuChildren = menuList.children;
    for (let a = 0; a < menuChildren.length; a++){
       let liEle = menuChildren[a];
       let anchor  = liEle.children[0];
       if (anchor.id === i){
        anchor.className='active';
       } else {
        anchor.className='';
       }
    }
    document.querySelector('#servicesIdTab').className='hiddenTab';
    document.querySelector('#trendsIdTab').className='hiddenTab';
    document.querySelector('#newServiceIdTab').className='hiddenTab';
    document.querySelector('#scheduleIdTab').className='hiddenTab';
    document.querySelector('#aboutIdTab').className='hiddenTab';
    document.querySelector('#'+i+'Tab').className='';
  }

  toggleInternet(){
    let checkBox = document.querySelector('#enableInternetId');
    
    this.setState ({
      internetEnabled: checkBox.checked
    })
  }
}

export default App;
