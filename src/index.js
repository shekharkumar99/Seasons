import React from 'react';
import ReachDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    state = {lat: null, errorMessage: ''};
    componentDidMount(){
        window.navigator.geolocation.watchPosition(
            position => {
                this.setState({lat: position.coords.latitude })
            },
            err => {
                this.setState({errorMessage: err.message} )
            }
        );

    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat
         }/>;
        }
        return <Spinner />;
     }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
       
};
}
ReachDOM.render(
    <App/>, document.querySelector('#root')
);