import React from "react";
import { createRoot } from "react-dom/client";
import "./options.css";
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
        <Typography>Hello from Options</Typography>
      </Box>
    </ThemeProvider>
  );
};

const container = document.createElement("div");
document.title = "Options";
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
