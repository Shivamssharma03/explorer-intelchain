// src/App.jsx
import AppRoutes from './routes';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;