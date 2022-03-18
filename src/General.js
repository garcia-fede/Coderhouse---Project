import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./components/main.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

const General = ()=>{
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default General
