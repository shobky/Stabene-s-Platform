import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import UpdateProfile from "./pages/UpdateProfile";
import PrivateRoutes from "./Authentication/PrivateRoute";

const App = () => {
  return (
    <div>

      {/* <Route path="/" element={<Home />} /> */}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/profile' element={<UpdateProfile />} />
            </Route>
          </Routes>
        </AuthProvider></BrowserRouter>



    </div>
  );
};
export default App;
