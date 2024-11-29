import * as React from'react';
export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}