import { useParams } from "react-router-dom";

export default function Profile() {
    const { username } = useParams();
    return (
        <>
            <h1>This is the profile page</h1>
            <h3>Welcome {username}</h3>
        </>
    );
}
