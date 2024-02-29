import { Component } from "react";
class CounterC extends Component {
    constructor(props) {
        super(props);
        console.log("I'm the constructor");
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        console.log("get derived State from props");
        return null;
    };

    componentDidMount() {
        console.log("I'm mounting");
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Snap shot before update");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update");
        return this.state.count > 3 ? false : true;
    }

    state = {
        count: 0,
        student: {
            id: 1,
            name: "Student 1",
        },
        test: this.props.propsName,
    };
    increment = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ student: { ...this.state.student, name: "Yassine" } });
    };
    decrement = () => {
        return this.setState({ count: this.state.count - 1 });
    };
    render() {
        console.log("I'm rendering");
        return (
            <>
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.count}</p>
                <p>{this.state.student.name}</p>
                <button onClick={this.decrement}>Decrement</button>
                {[...Array(this.state.count)].map((item, index) => {
                    return <Cell count={index} key={index} />;
                })}
            </>
        );
    }
}
export default CounterC;

class Cell extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        console.log("Component Unmouned");
    }
    render() {
        return <h3>Count : {this.props.count}</h3>;
    }
}
