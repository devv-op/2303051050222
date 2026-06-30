import { BASE_URL, credentials } from "./api";
import { setToken } from "./logger";

export async function login() {

    const response = await fetch(`${BASE_URL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    setToken(data.access_token);
}