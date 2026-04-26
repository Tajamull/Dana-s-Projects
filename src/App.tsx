import React, { useState, useEffect } from 'react';
import { Share2, Zap, Database, Shield, Cpu, Box } from 'lucide-react';
import './App.css';
import BoxpadPro from './components/Dashboard'; // Aapki dashboard file ka path

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);

  // --- API Loading Control ---
  useEffect(() => {
    const startApp = async () => {
      try {
        // API Call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setApiData(data); // Data save kar liya

        // 3 seconds ke baad design switch hoga
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching:", error);
        setIsLoading(false);
      }
    };

    startApp();
  }, []);

  // Loading Screen Icons
  const floatingIcons = [
    { icon: <Database size={20} />, top: '15%', left: '20%', delay: '0s', size: '60px' },
    { icon: <Shield size={18} />, top: '25%', right: '22%', delay: '1.5s', size: '50px' },
    { icon: <Zap size={22} />, bottom: '20%', left: '25%', delay: '0.8s', size: '65px' },
    { icon: <Cpu size={20} />, bottom: '30%', right: '18%', delay: '2.2s', size: '55px' },
    { icon: <Share2 size={16} />, top: '45%', left: '12%', delay: '3s', size: '45px' },
    { icon: <Box size={18} />, top: '55%', right: '10%', delay: '1.2s', size: '50px' },
  ];

  // --- Rendering Logic ---
  return (
    <>
      {isLoading ? (
        // 1. PEHLE YE DIKHEGA (Original Loading Design)
        <div className="loading-wrapper">
          <div className="main-card">
            {floatingIcons.map((item, i) => (
              <div key={i} className="hexagon-container" style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom, animationDelay: item.delay } as any}>
                <div className="hexagon-shape" style={{ width: item.size, height: item.size }}>
                  <div className="icon-content">{item.icon}</div>
                </div>
              </div>
            ))}
            <div className="spinner-container">
              <div className="gif-holder"><img src="Hero.gif" alt="Loading" className="extract-gif" /></div>
            </div>
            <div className="text-section">
              <h1 className="title">Extracting Information...</h1>
              <p className="subtitle">Loading API's and synchronizing data...</p>
            </div>
            <div className="bottom-preview"></div>
          </div>
        </div>
      ) : (
        // 2. PHIR DIRECT DASHBOARD DIKHEGA
        <BoxpadPro data={apiData} />
      )}

    </>
  );
};

export default App;