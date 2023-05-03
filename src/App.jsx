import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card flex gap-5">
				<button className="w-[100px] border-2" onClick={() => setCount((count) => count + 1)}>
					+
				</button>
				<button className="w-[100px] border-2" onClick={() => setCount((count) => count - 1)}>
					-
				</button>
				<p>{count}</p>
			</div>
		</>
	);
}

export default App;
