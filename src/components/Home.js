import React from 'react';
import header from '../images/Header.jpg'

class Home extends React.Component {
    render () {
        return (
            <div>
            <header className="App-header">
            <img className="responsive-img" src={header}/>
    <h1>Reside & More Properties</h1>
    <h3>We Help You Achieve Your Real Estate Goals</h3>
          </header>
            </div>
        )
    }
}
export default Home;
