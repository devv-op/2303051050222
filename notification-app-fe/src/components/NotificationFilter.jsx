import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function NotificationFilter({ filter, onChange }) {
  function handleChange(event, newFilter) {
    if (newFilter !== null) {
      onChange(newFilter);
    }
  }

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={handleChange}
      sx={{ marginBottom: 2 }}
    >
      <ToggleButton value="All">All</ToggleButton>
      <ToggleButton value="Placement">Placement</ToggleButton>
      <ToggleButton value="Result">Result</ToggleButton>
      <ToggleButton value="Event">Event</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default NotificationFilter;