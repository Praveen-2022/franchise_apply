import { Suspense } from "react"; // Import Suspense from react
import { Routes, Route } from "react-router-dom"; // Router-specific imports
import routes from "./routes"; // Your routes file
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
<Loading />;
function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />

      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
