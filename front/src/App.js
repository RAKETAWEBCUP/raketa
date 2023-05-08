import { RouterProvider } from 'react-router-dom';

// Routes 
import { router } from './routes/routesList';

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
