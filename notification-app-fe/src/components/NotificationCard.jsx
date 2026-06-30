import { Card, CardContent, Typography, Chip } from "@mui/material";

const typeColors = {
  Placement: "success",
  Result: "primary",
  Event: "default",
};

function NotificationCard({ notification, viewed, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        marginBottom: 2,
        cursor: "pointer",
        backgroundColor: viewed ? "#f5f5f5" : "white",
      }}
    >
      <CardContent>
        <Typography variant="h6">{notification.Message}</Typography>
        <Typography variant="body2" color="text.secondary">
          {notification.Timestamp}
        </Typography>

        <Chip
          label={notification.Type}
          color={typeColors[notification.Type] || "default"}
          size="small"
          sx={{ marginTop: 1, marginRight: 1 }}
        />

        {!viewed && <Chip label="New" color="error" size="small" />}
      </CardContent>
    </Card>
  );
}

export default NotificationCard;