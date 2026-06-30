import { BASE_URL } from "./config.js";
import { Log, getToken } from "./logger.js";

export async function getNotifications() {

    const response = await fetch(`${BASE_URL}/notifications`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    const data = await response.json();

    await Log(
        "backend",
        "info",
        "service",
        "Notifications fetched"
    );

    return data.notifications;
}