import React, { Component } from 'react';
import './App.css';
import { Container, Typography, Box } from '@material-ui/core';
import Navbar from './Layout/Navbar';
import Title from './components/Title';
import ButtonGroupType from './components/ButtonGroupType';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Box sx={{ marginBottom: 30, marginTop: 30 }}>
            <Title text="Create you own QR-CODE" />
          </Box>
          <ButtonGroupType />
        </Container>
      </div>
    );
  }
}

export default App;
