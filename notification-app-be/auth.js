import { BASE_URL, credentials } from "./config.js";
import { setToken } from "./logger.js";

export async function login() {

    const response = await fetch(`${BASE_URL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });

    const data = await response.json();

    setToken(data.access_token);
}