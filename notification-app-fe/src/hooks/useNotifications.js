import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "../api/logger";

export function useNotifications(token, page, limit, filter) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchNotifications(token, page, limit, filter);
        setNotifications(data);
        Log("frontend", "info", "hook", "notifications fetched");
      } catch (err) {
        setError(err.message);
        Log("frontend", "error", "hook", "failed to fetch notifications");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [token, page, limit, filter]);

  return { notifications, loading, error };
}