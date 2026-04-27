import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center rounded-full bg-primary-500/20 px-4 py-1 text-sm font-medium text-primary-100 ring-1 ring-white/10">
              Notes made simple
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Your digital notebook for ideas, tasks, and daily planning.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Create secure notes, save ideas instantly, and keep everything organized in one clean workspace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-950/70" />
            <div className="relative p-8 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <h2 className="text-sm uppercase tracking-[0.35em] text-white/70">Quick Notes</h2>
                <p className="mt-4 text-lg font-semibold text-white">Capture ideas, meeting summaries, and daily reminders in one place.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Search notes instantly', 'Secure cloud storage', 'Organize with tags', 'Fast note editor'].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-5 text-sm text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/7 p-6 text-sm text-slate-300">
                <p className="font-medium text-white">Designed for clarity</p>
                <p className="mt-2 leading-relaxed">
                  A calm, focused interface that helps you stay productive and organized without distractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

