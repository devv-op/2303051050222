import { useState, useEffect } from "react";
import { Container, Pagination, CircularProgress, Typography } from "@mui/material";
import NotificationFilter from "../components/NotificationFilter";
import NotificationCard from "../components/NotificationCard";
import { useNotifications } from "../hooks/useNotifications";
import { getToken } from "../api/auth";
import { Log } from "../api/logger";

function NotificationsPage() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [viewedIds, setViewedIds] = useState(() => {
    const saved = localStorage.getItem("viewedIds");
    return saved ? JSON.parse(saved) : [];
  });

  const limit = 10;
  const token = getToken();

  const { notifications, loading, error } = useNotifications(token, page, limit, filter);

  useEffect(() => {
    Log("frontend", "info", "page", "notifications page opened");
  }, []);

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
    setPage(1);
    Log("frontend", "info", "page", "filter changed to " + newFilter);
  }

  function handlePageChange(event, value) {
    setPage(value);
    Log("frontend", "info", "page", "page changed to " + value);
  }

  function handleCardClick(id) {
    if (!viewedIds.includes(id)) {
      const updated = [...viewedIds, id];
      setViewedIds(updated);
      localStorage.setItem("viewedIds", JSON.stringify(updated));
      Log("frontend", "info", "page", "notification clicked " + id);
    }
  }

  return (
    <Container sx={{ marginTop: 3 }}>
      <NotificationFilter filter={filter} onChange={handleFilterChange} />

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {notifications.map((n) => (
        <NotificationCard
          key={n.ID}
          notification={n}
          viewed={viewedIds.includes(n.ID)}
          onClick={() => handleCardClick(n.ID)}
        />
      ))}

      <Pagination
        count={5}
        page={page}
        onChange={handlePageChange}
        sx={{ marginTop: 2 }}
      />
    </Container>
  );
}

export default NotificationsPage;