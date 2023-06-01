import { Routes, Route } from "react-router-dom"
import TestApi from "../../test/api"
import Home from "./home"
import NotFound from "./notFoundPage"

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/test" element={<TestApi />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default Router
