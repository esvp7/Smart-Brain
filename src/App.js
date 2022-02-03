import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import 'tachyons';


const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

const initialState = {
      input: '',
    route: 'signin' ,
    isSignedIn: false ,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}
class App extends Component {

constructor() {
 super();
  this.state = initialState;
}

loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }



onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
  return (
    <div className="App">
    { this.state.route === 'home'
       ?<div>
       <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        <Logo /> 
        <ImageLinkForm />
           <Particles className='particles'
          params={particlesOptions} />
        </div>
      
      : (

      this.state.route === 'signin'

      ? <div> <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
         <Particles className='particles'
          params={particlesOptions} /> 
        </div>

      : <div>
      <Register loadUser={this.loadUser}onRouteChange={this.onRouteChange}/>
         <Particles className='particles'
          params={particlesOptions} />
      </div>


        )
      }

      </div>
  );
}
}


export default App;
