import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const App: React.FC<{}> = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          m: "10px",
        }}
      >
        <Typography>Hello from Popup</Typography>
      </Box>
    </ThemeProvider>
  );
};

const container = document.createElement("div");
document.title = "Options";
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
