import { BASE_URL } from "./config.js";

let token = "";

export function setToken(newToken) {
    token = newToken;
}

export function getToken() {
    return token;
}

export async function Log(stack, level, packageName, message) {
    await fetch(`${BASE_URL}/logs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            stack,
            level,
            package: packageName,
            message
        })
    });
}