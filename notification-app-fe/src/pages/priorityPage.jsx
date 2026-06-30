import { Container, Typography } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import { useNotifications } from "../hooks/useNotifications";
import { getToken } from "../api/auth";

const weight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function PriorityPage() {
  const token = getToken();
  const { notifications, loading } = useNotifications(token, 1, 50, "All");

  const sorted = [...notifications].sort((a, b) => {
    return weight[b.Type] - weight[a.Type];
  });

  const topNotifications = sorted.slice(0, 10);

  return (
    <Container sx={{ marginTop: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Top Priority Notifications
      </Typography>

      {loading && <Typography>Loading...</Typography>}

      {topNotifications.map((n) => (
        <NotificationCard key={n.ID} notification={n} viewed={false} onClick={() => {}} />
      ))}
    </Container>
  );
}

export default PriorityPage;