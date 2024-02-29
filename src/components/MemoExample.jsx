import { useMemo, useState } from "react";

export default function MemoExample() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const security = useMemo( () => {
        setTimeout(() => console.log("Security Check"), 5000);
        return password.length > 3;
    }, [password]);
    return (
        <>
            <h1>Memo Example</h1>
            <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                    security;
                    setPassword(e.target.value);
                }}
                style={security ? { color: "lightgreen" } : { color: "red" }}
            />
            <br />
        </>
    );
}
