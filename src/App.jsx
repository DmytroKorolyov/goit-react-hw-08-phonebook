import { Route, Routes } from "react-router-dom";
import ContactsMain from "./components/ContactsMain";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import '../src/index.css'
import Contacts from "./pages/Contacts/Contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import PrivateRoute from "routes/PrivateRoute";

// import { Home, Login, NotFound, Register, Contacts } from './pages'


export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshThunk())
    }, [dispatch])
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={
                    <PrivateRoute>
                        <Contacts />
                    </PrivateRoute>
                    } />
                <Route path="test" element={
                    <PrivateRoute>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptas
                            quibusdam esse dolores minus laborum, eveniet in tenetur temporibus voluptatem.
                            Voluptatibus, molestiae quo! Facilis dolores itaque reiciendis aut quaerat architecto!</p>
                    </PrivateRoute>
                    } />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
    )
}