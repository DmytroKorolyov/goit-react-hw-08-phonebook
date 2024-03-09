import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import '../src/index.css'
import Contacts from "./pages/Contacts/Contacts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { selectIsRefresh } from "./redux/auth/slice";
import Preloader from "./components/Preloader";

// import { Home, Login, NotFound, Register, Contacts } from './pages'


export const App = () => {
    const isRefresh = useSelector(selectIsRefresh)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshThunk())
    }, [dispatch])
    return isRefresh ? (
        <Preloader />
    ) : (
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                    <Route
                        path='contacts'
                        element={
                    <PrivateRoute>
                        <Contacts />
                    </PrivateRoute>
                    }
                    />
               
                <Route path="login" element={<PublicRoute>
                    <Login/>
                </PublicRoute>
                }
                />
                <Route path="register" element={<PublicRoute>
                    <Register />
                </PublicRoute>
                }
                />
                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
    )
}