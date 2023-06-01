import { useState } from "react"

function useForm(initialState = {}, onSubmit) {
	const [input, setInput] = useState(initialState)
	function handleChange(event) {
		const { name, value } = event.target
		setInput((state) => ({ ...state, [name]: value }))
	}
	function handleSubmit(event) {
		event.preventDefault()
		onSubmit?.(input)
	}

	return [input, handleChange, handleSubmit]
}

export default useForm
