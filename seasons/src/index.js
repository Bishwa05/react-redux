import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    state = { lat:null, errorMessage: ''};

    // called when component shows up first time
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat : position.coords.latitude }),
            (err) => this.setState({ errorMessage : err.message })
        );
    }
    // anytime when component updates itself
    // componentDidUpdate() {
    //     console.log("My component was updated");
    // }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error :{ this.state.errorMessage } </div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div><SeasonDisplay lat = {this.state.lat} /></div>
        }
        return <Spinner message= "Please accept location request" />;
    
    }

    // React says we have to define render!!
    // It must return sone jsx
    render(){
        return (
            <div className ="border red">
            { this.renderContent()}
            </div>
        );    
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));