import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <h1>This is the Dashboard page</h1>
            <Link to="/events">Go To Contact</Link>
        </>
    );
}
