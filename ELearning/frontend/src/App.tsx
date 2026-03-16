import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold">
              ELearning
            </Link>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">
                Dashboard
              </Link>
              <Link to="/courses" className="hover:underline">
                Courses
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<CourseList />} />
        </Routes>
      </div>
    </Router>
  );
}
