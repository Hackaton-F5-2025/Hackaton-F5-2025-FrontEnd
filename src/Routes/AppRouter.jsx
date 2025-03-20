import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetail from "../Pages/ProductDetail";
import ProductList from "../Pages/ProductList";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ProductDetail" element={<ProductDetail />} />
                <Route path="/ProductsList" element={<ProductsList />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;