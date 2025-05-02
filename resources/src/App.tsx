
import { Toaster } from "./components/ui/toaster.tsx";
import { Toaster as Sonner } from "./components/ui/sonner.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { useAuth } from "./contexts/AuthContext.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import MusicGroupManagement from "./pages/MusicGroupManagement.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import MusicManagement from "./pages/MusicManagement.tsx";
import SongManagement from "./pages/SongManagement.tsx";
import ScheduleManagement from "./pages/ScheduleManagement.tsx";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const AppRoutes = () => {
  const { user, isAdmin } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={user ? <UserProfile /> : <Navigate to="/login" />} />
        <Route path="/music-management" element={user ? <MusicGroupManagement /> : <Navigate to="/login" />} />
        <Route path="/musicians" element={user ? <MusicManagement /> : <Navigate to="/login" />} />
        <Route path="/songs" element={user ? <SongManagement /> : <Navigate to="/login" />} />
        <Route path="/schedules" element={user ? <ScheduleManagement /> : <Navigate to="/login" />} />
        <Route path="/admin" element={user && isAdmin ? <AdminDashboard /> : <Navigate to={user ? "/music-management" : "/login"} />} />
        <Route path="/" element={<Navigate to={user ? "/music-management" : "/login"} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <>
    <Helmet titleTemplate="%s | MúsicaIgreja" defaultTitle="Sistema de Gestão Musical">
      <meta name="description" content="Sistema de gerenciamento de música para igrejas" />
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </>
);

export default App;
