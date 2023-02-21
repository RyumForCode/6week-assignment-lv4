import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompositionDoc from "../pages/CompositionDoc";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/composition-doc' element = {<CompositionDoc/>}/>
                <Route path = '/posts/:id' element = {<Posts />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;