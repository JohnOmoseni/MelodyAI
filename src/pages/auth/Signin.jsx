import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { signInSchema } from "@schema/validate";
import FormGroup from "./FormInput";
import logo from "/images/melody.ai.png";
import { setToken, setUser } from "@redux/features/userSlice";
import AuthHeader from "./AuthHeader";
import { toast } from "react-toastify";
import { HttpCaller } from "@lib/fetch/getReq";
import { useDispatch } from "react-redux";
import { SpiralSpinner } from "react-spinners-kit";
import { signIn } from "@lib/fetch/postReq";

const Top = () => (
	<div className="w-full self-center">
		<div className="w-[250px] p-3 mt-3 mx-auto mb-4 drop-shadow-md">
			<img src={logo} alt="Osho Free" />
		</div>
		<h2 className="text-center text-shadow">Welcome back!</h2>
		<p className="text-center text-neutral-500 tracking-wide text-regular">
			Please login to your account.
		</p>
	</div>
);

const Button = ({ title, type, className, disabled }) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${className} ${
				disabled ? "flex-row gap-2.5" : ""
			} text-sm font-kinn !w-full mx-auto transition-all hover:bg-grad-300 hover:opacity-80 translate-y-0 active:translate-y-1 active:scale-95
      px-6 py-3 rounded-sm shadow-sm disabled:opacity-70`}
		>
			{disabled && (
				<span className="">
					<SpiralSpinner size={30} frontColor="purple" />
				</span>
			)}
			{title}
		</button>
	);
};

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		const formData = new URLSearchParams();
		formData.append("username", values.email);
		formData.append("password", values.password);

		console.log(formData);

		try {
			// const res = await signIn(formData);
			const res = await HttpCaller("auth/login", "POST", formData, {
				"Content-Type": "application/x-www-form-urlencoded",
			});

			if (res?.success && res?.access_token) {
				dispatch(setToken(res?.access_token));
				dispatch(setUser(res?.data));
				sessionStorage.setItem("melody-auth-token", res?.access_token);

				navigate("/dashboard");
			}
		} catch (error) {
			console.error(`Error: ${error}`);
			toast.error("Something went wrong", {
				className: "font-kinn tracking-wide",
			});
		}
	};

	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleChange,
		handleSubmit,
		handleBlur,
	} = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: signInSchema,
		onSubmit,
	});

	return (
		<section
			className="w-full h-screen relative overflow-hidden flex-column"
			id="login"
		>
			<AuthHeader
				text={["Don't have an account", "Sign up"]}
				link="/auth/sign-up"
			/>
			<div className="w-full flex-1 overflow-y-auto pt-3">
				<Top />

				<div className="w-full max-w-[800px] mx-auto mt-12 flex-column">
					<form
						onSubmit={handleSubmit}
						className="relative flex-1 mx-auto w-[90%] flex-column gap-4 md:gap-6 rounded-sm"
					>
						<FormGroup
							name="email"
							type="email"
							label="Email"
							required
							value={values.email}
							placeholder="example@gmail.com"
							icon={<AiOutlineMail size={18} />}
							errors={errors}
							touched={touched}
							onBlur={handleBlur}
							onChange={handleChange}
						/>

						<FormGroup
							name="password"
							label="Password"
							type="password"
							required
							value={values.password}
							errors={errors}
							touched={touched}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<Button
							type="submit"
							title="Submit"
							disabled={isSubmitting}
							textGradient
							className="bg-grad-200 font-kinn w-[80%] flex-row mx-auto mt-12 hover:bg-grad-100 hover:scale-[1.02]"
						/>
					</form>
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
			</div>
		</section>
	);
}

export default SignIn;
