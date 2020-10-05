import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Form from "./components/Form";
import theme, { darkTheme } from "./theme";

const renderApp = () => (
  <Container maxWidth="md">
    <Box my={4} width={1}>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo make this
        <span role="img" aria-labelledby="wat">
          🍏🍏
        </span>
        dark
      </Typography>
      <Form />
    </Box>
  </Container>
);

const App = () => (
  <ThemeProvider theme={darkTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {renderApp()}
  </ThemeProvider>
);

export default App;
