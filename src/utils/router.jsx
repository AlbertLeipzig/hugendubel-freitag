import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Books } from '../pages/Books';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/books',
        element: <Books />,
      },
    ],
  },
]);
