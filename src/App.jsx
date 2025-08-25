// Importing React library and Component class
import React, { Component } from 'react';
// Importing external CSS file to style the component
import './App.css';

class App extends Component {
  // The render method returns the JSX (UI structure) to be displayed
  render() {
    return (
      <>
        {/* Header section containing a logo */}
        <header>
          <div className='logo'>My Projects</div>
          {/* .logo class styles the text to look like a bold site/project title */}
        </header>

        {/* Main content section displaying project cards in a grid layout */}
        <section>
          {/* Each card displays an image and a label/title below it */}
          <div className='card'>
            <img src='/ultron.webp' alt='' />
            <label>Age of Ultron</label>
          </div>

          <div className='card'>
            <img src='/rag.jpg' alt='' />
            <label>Thor Ragnarok</label>
          </div>

          <div className='card'>
            <img src='/ant.webp' alt='' />
            <label>Antman and the Wasp</label>
          </div>

          <div className='card'>
            <img src='/infinity.jpg' alt='' />
            <label>Infinity War</label>
          </div>

          <div className='card'>
            <img src='/end.webp' alt='' />
            <label>End Game</label>
          </div>

          <div className='card'>
            <img src='/loki.webp' alt='' />
            <label>Loki </label>
          </div>
        </section>

        {/* Footer section with copyright notice */}
        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </>
    );
  }
}

// Exporting the App component so it can be used in other parts of the application
export default App;