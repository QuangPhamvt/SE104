import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
	const navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => {
			navigate("/")
		}, 4000)
	}, [])
	return <div className="text-5xl">NOT FOUND</div>
}

export default NotFound
