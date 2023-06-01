import { Routes, Route } from "react-router-dom"
import TestApi from "../../test/api"
import NotFound from "./notFoundPage"
import Deposit from "./home/deposit"
import Navigation from "../components/layout/navigation"
import Customer from "./home/customer"
import Landing from "./Landing"
import Report from "./home/report"

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/home" element={<Navigation />}>
				<Route index element={<Deposit />} />
				<Route path="deposit" element={<Deposit />} />
				<Route path="customer" element={<Customer />} />
				<Route path="report" element={<Report />} />
			</Route>
			<Route path="/test" element={<TestApi />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default Router
