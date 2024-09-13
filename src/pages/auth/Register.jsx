import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormGroup from "./FormInput";
import AuthHeader from "./AuthHeader";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { registerSchema } from "@schema/validate";
import { HttpCaller } from "@lib/fetch/getReq";
import { setUser } from "@redux/features/userSlice";
import logo from "/images/melody.ai.png";
import { toast } from "react-toastify";
import { register } from "@lib/fetch/postReq";

const Top = () => (
	<div className="w-full self-center">
		<div className="w-[250px] p-3 mt-3 mx-auto mb-4 drop-shadow-md">
			<img src={logo} alt="Osho Free" />
		</div>
		<h2 className="text-center text-shadow">Welcome!</h2>
		<p className="text-center text-neutral-500 tracking-wide text-regular">
			Please signup to begin.
		</p>
	</div>
);

const Button = ({ title, type, className, disabled }) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${className} flex-row gap-2.5
 text-sm font-kinn !w-full mx-auto transition-all hover:bg-grad-300 hover:opacity-80 translate-y-0 active:translate-y-1 active:scale-95
      px-6 py-3 rounded-sm shadow-sm disabled:opacity-70`}
		>
			{title}
		</button>
	);
};

function Register() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onSubmit = async (values, actions) => {
		console.log("Submitted", values, actions);

		const newUser = {
			firstname: values.firstName,
			lastname: values.lastName,
			business_name: values.businessName,
			email: values.email,
			password: values.password,
		};

		try {
			// const res = await register(newUser);

			const res = await HttpCaller(
				"auth/signup",
				"POST",
				newUser,
				{
					"Content-Type": "application/json",
				},
				"true"
			);

			if (res?.success) {
				// dispatch(setUser(res?.data));
				navigate("/auth/sign-in");
			}
		} catch (error) {
			console.error(`Error: ${error.message}`);

			toast.error("Something went wrong", {
				className: "font-poppins tracking-wide",
			});
			// actions.resetForm();
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
			businessName: "",
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: registerSchema,
		onSubmit,
	});

	return (
		<section
			className="w-full h-screen relative overflow-hidden flex-column"
			id="login"
		>
			<AuthHeader
				text={["Already have an account?", "Sign in"]}
				link="/auth/sign-in"
			/>

			<div className="w-full overflow-y-auto pt-3">
				<Top />

				<div className="w-full max-w-[800px] mx-auto my-12 flex-column">
					<form
						onSubmit={handleSubmit}
						className="relative flex-1 mx-auto w-[90%] flex-column gap-4 md:gap-6 rounded-sm"
					>
						<FormGroup
							name="businessName"
							label="Business Name"
							value={values.businessName}
							required
							placeholder="Your business name"
							errors={errors}
							touched={touched}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<div className="w-full flex-row gap-6">
							<FormGroup
								name="firstName"
								label="First Name"
								value={values.firstName}
								required
								placeholder=""
								errors={errors}
								touched={touched}
								onBlur={handleBlur}
								onChange={handleChange}
							/>

							<FormGroup
								name="lastName"
								label="Last Name"
								value={values.lastName}
								required
								placeholder=""
								errors={errors}
								touched={touched}
								onBlur={handleBlur}
								onChange={handleChange}
							/>
						</div>

						<FormGroup
							name="email"
							type="email"
							label="Email"
							value={values.email}
							required
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
						<FormGroup
							name="confirmPassword"
							label="Confirm password"
							type="password"
							required
							value={values.confirmPassword}
							errors={errors}
							touched={touched}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<Button
							type="submit"
							title="Submit"
							textGradient
							className="bg-grad-200 font-kinn w-[80%] flex-row mx-auto mt-12 hover:bg-grad-100 hover:scale-[1.02]"
						/>
					</form>
					{/* <div className="w-[80%] mx-auto mt-8 flex-row gap-3 mb-3">
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
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Register;
