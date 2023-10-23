import React, { Component } from 'react'
import Beer from './Beer';

export default calss getBeers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }
    }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                beers: [...data]
                })
            )
    }
    
    componentDidUpdate() {
        console.log("component updated", this.state.beer)
    }
    render() {
        return (
            <div className='page'>
                <h1>Beers Yum!</h1>
                <ul className='all-beers'>
                    {this.state.beers.map((beer) => {
                        return (<Beer beer={beer} key={beer.id} />)  
                    })}
                </ul>
            </div>
        )
    }
    


}