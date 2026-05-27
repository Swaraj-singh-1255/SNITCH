
import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './app.routes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
