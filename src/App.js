import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Routes';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div  >
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
