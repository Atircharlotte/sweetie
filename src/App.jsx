import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './pages/desserts/Home.jsx';
import About from './pages/desserts/About.jsx';
import Desserts, { loader as dsLoader } from './pages/desserts/Desserts.jsx';
import '../server.js'; //import the server!!!!
import Dessertdetail from './pages/desserts/DessertDetail.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostDesserts from './pages/Host/HostDesserts.jsx';
import HostDessertsDetail from './pages/Host/HostDessertsDetail.jsx';
import HostDsPricing from './pages/Host/HostDsPricing.jsx';
import HostDsInfo from './pages/Host/HostDsInfo.jsx';
import NotFound from './pages/NotFound.jsx';
import Error from './components/Error.jsx';

const newRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="desserts"
        element={<Desserts />}
        loader={dsLoader}
        errorElement={<Error />}
      />
      <Route path="desserts/:id" element={<Dessertdetail />} />

      <Route path="/host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />

        <Route path="desserts" element={<HostDesserts />} />
        <Route path="desserts/:id" element={<HostDessertsDetail />}>
          <Route index element={<HostDsInfo />} />
          <Route path="pricing" element={<HostDsPricing />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={newRouter} />;
}

export default App;
