import {createBrowserRouter} from 'react-router-dom'
import User from './components/User/User.jsx'
import Admin from './components/Admin/Admin.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <User />,
      errorElement: <div>error 404</div>
  
    },
    {
      path: '/admin',
      element: <Admin />,
      errorElement: <div>error Admin</div>,
      children: [
        {
          path: '',
          element: <div>empty</div>,
        },
        {
          path: 'services',
          element: <div>services</div>,
          errorElement: <div>error contant not found</div>
        },
        {
          path: 'meeting',
          element: <div>meeting</div>,
          errorElement: <div>error contant not found</div>
        }
      ]
    }
  ])

  export default router;