import { Route, Routes } from "react-router-dom";
import ContactsMain from "./components/ContactsMain";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import '../src/index.css'
import Contacts from "./pages/Contacts/Contacts";

// import { Home, Login, NotFound, Register, Contacts } from './pages'


export const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
    )
}