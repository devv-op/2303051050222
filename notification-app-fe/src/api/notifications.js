const BASE_URL = "http://4.224.186.213/evaluation-service";

export async function fetchNotifications(token, page, limit, type) {
  let url = `${BASE_URL}/notifications?page=${page}&limit=${limit}`;

  if (type && type !== "All") {
    url += `&notification_type=${type}`;
  }

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notifications");
  }

  const data = await res.json();
  return data.notifications;
}