import DepositCard from "./deposit"

import LTKCard from "./LTK"
const Deposit = () => {
	return (
		<div className="h-[800px] container mx-auto px-2 ">
			<div className="grid grid-cols-3 h-full -z-10">
				<DepositCard />
				<LTKCard />
			</div>
		</div>
	)
}

export default Deposit
