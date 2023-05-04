import React from 'react';

import Counter from './components/Counter';

function App() {
	const [num, setNum] = React.useState(0);

	return (
		<>
			<div className="flex flex-col h-screen justify-center items-center gap-4">
				<div className="w-[40px] h-[5px] flex justify-center items-center text-grey rounded-[10px]">{num}</div>
				<Counter onChangeNumber={setNum} />
			</div>
		</>
	);
}

export default App;
