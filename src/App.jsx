import { useState } from 'react';

function App() {
	const [counter, setCount] = useState(0);

	const plusFunction = () => {
		const value = counter + 1;
		setCount(value);
	};

	const minFunction = () => {
		const value = counter - 1;
		setCount(value);
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center gap-5">
				<div className="text-center">
					<p>{counter}</p>
				</div>
				<div className="flex gap-5">
					<button className="w-[100px] border-2" onClick={plusFunction}>
						+
					</button>
					<button className="w-[100px] border-2" onClick={minFunction}>
						-
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
