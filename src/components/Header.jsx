// import {Component} from "react"
// export default class Header extends Component {

//     render() {
//         return (
//             <h1>Class Component</h1>
//         )
//     }
// }

export default function Header({name}) {
    console.log(name);
    return (
        <h1>Function Component</h1>
    )
}