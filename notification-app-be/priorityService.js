export function getTopNotifications(notifications) {

    const weight = {
        Placement: 3,
        Result: 2,
        Event: 1
    };

    notifications.sort((a, b) => {

        if (weight[a.Type] !== weight[b.Type]) {
            return weight[b.Type] - weight[a.Type];
        }

        return new Date(b.Timestamp) - new Date(a.Timestamp);

    });

    return notifications.slice(0, 10);
}