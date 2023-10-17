import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/index.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            // eslint-disable-next-line react/jsx-key
            return <Route path={route.path} element={<Page></Page>}></Route>;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
