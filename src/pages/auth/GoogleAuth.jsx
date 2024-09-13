import { FcGoogle } from "react-icons/fc";

function GoogleAuth() {
	return (
		<div>
			<div className="w-[80%] mx-auto mt-8 flex-row gap-3 mb-3">
				<hr className="w-[50%] shadow-sm border border-solid border-br-light bg-br-light " />
				<span className="text-base font-kinn font-extrabold text-shadow">
					Or
				</span>
				<hr className="w-[50%] shadow-sm border border-solid border-br-light bg-br-light" />
			</div>
			<div className="mx-auto w-full mb-4">
				<button className="w-[80%] sm:w-[60%] mx-auto my-4 py-2 px-3 flex-row gap-3 border border-solid border-br-light rounded-md shadow-sm leading-4 text-regular">
					<FcGoogle className="h-5 w-5" />
					Continue with Google
				</button>
			</div>
		</div>
	);
}

export default GoogleAuth;
