// import Counter from './components/Counter';
import { useState } from 'react';

import React from 'react';

function App() {
	const [counter, setCount] = useState(0);
	const [warningMessage, setWarningMessage] = React.useState(false);

	const checkValueCondition = (value, callback) => {
		if (value >= 1 && value <= 10) {
			setWarningMessage(false);
			callback();
		}
		setWarningMessage(true);
	};
	const plusFunction = () => {
		const value = counter + 1;
		// setCount(value);
		checkValueCondition(value, function () {
			setCount(value);
		});
	};

	const minFunction = () => {
		const value = counter - 1;
		// setCount(value);
		checkValueCondition(value, function () {
			setCount(value);
		});
	};

	return (
		<>
			<div className="text-center my-5">{warningMessage}</div>
			<div className="flex flex-col justify-center items-center gap-5">
				<div className="text-center">
					<p>{counter}</p>
				</div>
				<div className="flex gap-5">
					<button className="w-[100px] border-2" onClick={minFunction}>
						-
					</button>
					<button className="w-[100px] border-2" onClick={plusFunction}>
						+
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
