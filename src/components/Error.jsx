function Error(error) {
	console.log(error);
	return (
		<div className="relative grid place-items-center h-full w-full">
			<h3 className="text-center px-3">Error | Something went wrong.</h3>
		</div>
	);
}

export default Error;
