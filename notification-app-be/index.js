import { login } from "./auth.js";
import { getNotifications } from "./notification.js";
import { getTopNotifications } from "./priorityService.js";
import { Log } from "./logger.js";

async function main() {

    await login();

    const notifications = await getNotifications();

    const topNotifications = getTopNotifications(notifications);

    await Log(
        "backend",
        "info",
        "service",
        "Top 10 notifications generated"
    );

    console.table(topNotifications);

}

main();