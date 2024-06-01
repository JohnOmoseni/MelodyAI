import { useFormik } from "formik";
import { uploadSchema } from "@schema/validate";
import { useDispatch } from "react-redux";
import { setProject } from "@redux/features/dashboardStateSlice";
import ButtonUpload from "../ButtonUpload";

export const FormGroup = ({
	label,
	required,
	name,
	value,
	placeholder = "",
	errors,
	touched,
	onBlur,
	onChange,
}) => {
	return (
		<div
			className={`w-full group ${
				errors[name] && touched[name] ? "is-error" : ""
			}`}
		>
			<label
				htmlFor={name}
				className={`relative text-sm mb-1 inline-block tracking-wider text-shadow after:absolute ${
					required && "after:content-['*']"
				} after:-top-[2px] after:-right-2.5 after:text-red-800 after:text-s`}
			>
				{label}
			</label>
			<div
				className={`${
					errors[name] && touched[name]
						? "border-pink-400"
						: "border-br-light bg-[#282828]"
				} my-2 relative rounded-md shadow-sm border border-solid form-group w-full !justify-start text-white align-middle overflow-hidden`}
			>
				<input
					id={name}
					type="text"
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					className="w-full py-2.5 px-3 field-reset leading-none placeholder:text-neutral-400 placeholder:text-base"
				/>
			</div>
			<p className="mt-1 ml-1 hidden group-[.is-error]:block text-pink-600 font-semibold text-tiny tracking-wide">
				{errors[name]}
			</p>
		</div>
	);
};

const UploadForm = ({ onRunData, isLoading }) => {
	const dispatch = useDispatch();
	const onSubmit = async (values, actions) => {
		dispatch(setProject({ projectName: values.projectName }));

		onRunData(values.projectName, actions);
	};

	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useFormik({
		initialValues: {
			projectName: "",
		},
		validationSchema: uploadSchema,
		onSubmit: onSubmit,
	});

	return (
		<div className="pt-[3em] pb-6 px-6 md:px-[3%] md:py-[8%">
			<form
				onSubmit={handleSubmit}
				className="relative mx-auto w-[90%] flex-column gap-4 md:gap-6 rounded-sm overflow-hidden"
			>
				<FormGroup
					name="projectName"
					label="Project name"
					required
					value={values.projectName}
					placeholder="Provide a name for your project"
					errors={errors}
					touched={touched}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<ButtonUpload
					type="submit"
					title="Run Data"
					disabled={isLoading}
					className="!w-full"
				/>
			</form>
		</div>
	);
};

export default UploadForm;
