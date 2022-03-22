import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle, setType, setText } from "./reducers/toasts";
import NavBar from "./components/organisms/NavBar";
import ToastNotification from "./components/atoms/ToastNotification";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Faq from "./pages/Faq";
import Home from "./pages/Home";

const routes = [
  { url: "/login", page: Login },
  { url: "/register", page: Register },
  { url: "/faq", page: Faq },
  { url: "/", page: Home },
];

function App() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);

  const resetToast = () => {
    dispatch(toggle(false));
    dispatch(setType(""));
    dispatch(setText(""));
  };

  useEffect(() => {
    if (toast.show) {
      setTimeout(() => {
        resetToast();
      }, 3000);
    }
  }, [toast]);

  return (
    <>
      <Router>
        <NavBar />
        {toast.show && <ToastNotification type={toast.type} text={toast.text} />}
        <Routes>
          {routes.map((route) => (
            <Route path={route.url} element={<route.page />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
