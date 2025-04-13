import  Sidebar from './components/Sidebar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-20 ml-20">
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
 