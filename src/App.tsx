import React from 'react';
import { NavBar } from './components/navbar';
import { Scheduler } from './components/Scheduler';
import { Container, Row } from 'react-bootstrap';
import { YogaVideos } from './components/YogaVideos';
import { SocialSpace } from './components/SocialSpace';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WorkoutVideos } from './components/WorkoutVideos';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row className='mb-3'>
            <NavBar />
          </Row>
          <Routes >
            <Route path="/home" element={<Scheduler/>} />
            <Route path="/yoga" element={<YogaVideos/> } />
            <Route path="/workout" element={<WorkoutVideos/> } />
            <Route path="/scheduler" element={<Scheduler/> } />
            <Route path="/social" element={<SocialSpace /> } />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
