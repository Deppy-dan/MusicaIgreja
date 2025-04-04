import UserProfile from "../../src/pages/UserProfile.tsx";
 import AdminDashboard from "../../src/pages/AdminDashboard.tsx";
 import MusicManagement from "../../src/pages/MusicManagement";
 import SongManagement from "../../src/pages/SongManagement";
 import ScheduleManagement from "../../src/pages/ScheduleManagement.tsx";
 import { Helmet } from "react-helmet";
 import { useAuth } from '../../src/contexts/AuthContext';
 import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 import { Routes, Route, Navigate } from "react-router-dom";
 import "../css/App.css"; 
 
 const queryClient = new QueryClient();
const queryClientWithOptions = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});


// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       refetchOnWindowFocus: false,
//     },
//  },
// });
 
const AppRoutes = () => {
  const { user, isAdmin } = useAuth();

  return (
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route
              path="/profile"
              element={user ? <UserProfile /> : <Navigate to="/login" />}
          />
          <Route
              path="/music-management"
              element={user ? <MusicGroupManagement /> : <Navigate to="/login" />}
          />
          <Route
              path="/musicians"
              element={
                  user && isAdmin
                      ? <MusicManagement />
                      : <Navigate to={user ? "/music-management" : "/login"} />
              }
          />
          <Route path="/songs" element={user ? <SongManagement /> : <Navigate to="/login" />} />
          <Route
              path="/schedules"
              element={user ? <ScheduleManagement /> : <Navigate to="/login" />}
          />
          <Route
              path="/admin"
              element={
                  user && isAdmin
                      ? <AdminDashboard />
                      : <Navigate to={user ? "/music-management" : "/login"} />
              }
          />
          <Route
              path="/"
              element={<Navigate to={user ? "/music-management" : "/login"} />}
          />
          <Route path="*" element={<NotFound />} />
      </Routes>
     
    );
};

 
const App = () => (
  <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <TooltipProvider>
              <Helmet
                  titleTemplate="%s | Música Igreja"
                  defaultTitle="Sistema de Gestão Musical"
              >
                  <meta
                      name="description"
                      content="Sistema de gerenciamento de música para igrejas"
                  />
              </Helmet>
              <Toaster />
              <Sonner />
              <Router>
                  <AppRoutes />
              </Router>
          </TooltipProvider>
      </AuthProvider>
  </QueryClientProvider>
);

export default App;