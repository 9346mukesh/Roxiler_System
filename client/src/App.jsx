import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <div>
            <p className="eyebrow">Store Management System</p>
            <h1>Hiring challenge starter</h1>
          </div>
          <nav className="topnav">
            <Link to="/">Overview</Link>
            <Link to="/setup">Setup</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/setup" element={<SetupGuide />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function Overview() {
  const frontendStack = ['React', 'React Router DOM', 'Axios', 'React Hook Form', 'Bootstrap', 'React Leaflet']
  const backendStack = ['Node.js', 'Express.js', 'JWT', 'bcrypt.js', 'mysql2', 'Winston', 'Multer']

  return (
    <section className="hero-card">
      <div className="hero-copy">
        <span className="badge-soft">Vite + React ready</span>
        <h2>Project foundation is installed and organized for development.</h2>
        <p>
          The client is bootstrapped with Vite, the backend is wired with Express,
          and the key libraries for authentication, forms, maps, uploads, and data
          access are installed.
        </p>
      </div>

      <div className="stack-grid">
        <div className="stack-panel">
          <h3>Frontend</h3>
          <ul>
            {frontendStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="stack-panel">
          <h3>Backend</h3>
          <ul>
            {backendStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="stack-panel accent-panel">
          <h3>Next step</h3>
          <p>
            Add your pages, API routes, MySQL schema, and authentication flow on top
            of this starter.
          </p>
        </div>
      </div>
    </section>
  )
}

function SetupGuide() {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <span className="badge-soft">Local development</span>
        <h2>Run the app from the workspace.</h2>
        <p>
          Start the development server for both the client and server.
        </p>
      </div>

      <div className="stack-panel full-width">
        <h3>What is already installed</h3>
        <p>
          React, Vite, React Router DOM, Axios, React Hook Form, Bootstrap,
          Leaflet, React Leaflet, Express, JWT, bcryptjs, mysql2, dotenv, CORS,
          express-validator, Multer, Winston, Swagger tooling, and Nodemon.
        </p>
      </div>
    </section>
  )
}

export default App
