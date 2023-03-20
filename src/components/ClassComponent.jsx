import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salutation: 'hello',
            time: Date.now(),
            countedNumber: props.numberProp,
        }
    }

    componentDidMount() {
        alert('Initial number from the class component state:' + this.state.countedNumber);
        this.setState({countedNumber: 1000});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.numberProp !== this.props.numberProp) {
            this.setState({salutation: 'Hey there, The number prop changed to: ' + this.props.numberProp});
        }
    }

    doSomething = () => {
        this.setState({
            time: Date.now()
        })
    }

    render() {
        const { salutation, countedNumber, time } = this.state;
        
        const { aStringProp, numberProp, children } = this.props;
    
        return (
            <div style={{border: '5px solid blue', color: 'blue'}}>
                <h2>Class Component</h2>
                <h3>State</h3>
                <p>
                    {salutation}
                </p>
                <p>
                    This is the number from state: {countedNumber}
                </p>
                <p>
                    <button onClick={this.doSomething}>update time</button>
                    <span> unix time: {time}</span>
                </p>
                <br/>
                <br/>
                <h3>Props</h3>
                <p>
                    {aStringProp}
                </p>
                <p>
                    {numberProp}
                </p>
                <p>
                    {children}
                </p>
                
            </div>
        )
    }
}

export default ClassComponent