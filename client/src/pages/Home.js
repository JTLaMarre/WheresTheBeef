import React, { Component } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Jumbotron/Jumbotron';

class Home extends Component {
    render() {
        return (
            <section id="home">
                <Nav/>
               <Hero/>
                
            </section>
        );
    }
}

export default Home;
