import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import CarouselExamples from '../pages/CarouselExamples'
import FormElements from '../pages/FormElements'
import UiComponents from '../pages/UiComponents'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'carousel-examples', element: <CarouselExamples /> },
        { path: 'form-elements', element: <FormElements /> },
        { path: 'ui-components', element: <UiComponents /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
