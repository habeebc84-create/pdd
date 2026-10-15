import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Backend is offline"));
  }, []);

  return (
    <div style={{ 
      fontFamily: "sans-serif", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      backgroundColor: "#f0f2f5"
    }}>
      <h1>ReturnRoute Project</h1>
      <div style={{ 
        padding: "20px", 
        borderRadius: "8px", 
        backgroundColor: "white", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)" 
      }}>
        <strong>Backend Status:</strong> {status}
      </div>
      <p style={{ marginTop: "20px" }}>The foundation is now built.</p>
    </div>
  );
}

export default App;

