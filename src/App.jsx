import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./Home"
import Login from "./pages/Login"
import { useAuth } from "./context/AuthContext"

function App() {
  const { user, loading, error } = useAuth()
  if (loading) return <div className="text-center mt-20"> Checking authentication...</div>
  if (error) return <div className="text-red-500 text-center mt-20"> Error: {error.message}</div>

  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" replace />}
      />
      <Route
        path="/"
        element={user ? <Home /> : <Navigate to="/login" replace />}
      />
    </Routes>
  )
}

export default App
