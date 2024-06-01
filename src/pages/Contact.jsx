
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../schema/validate";
import { FormGroup } from "../components/FormGroup";

const Button = ({ title, type, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} flex-row gap-2.5
      bg-red-400 font-kinn w-max mx-auto mt-10   transition-all hover:bg-grad-300 hover:opacity-80 hover:scale-[1.02] translate-y-0 active:translate-y-1 active:scale-y-90
      px-6 py-2 rounded-sm shadow-sm disabled:opacity-70`}
    >
      {title}
    </button>
  );
};

const ContactPage = () => {
  const onSubmit = async (values, actions) => {
    try {
      console.log(values);
    } catch (err) {
      console.log(err, "Something went wrong");
    } finally {
      actions.resetForm();
    }
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
      email: "",
      firstName: "",
      lastName: "",
      company: "",
      job: "",
      phoneNo: "",
      country: "",
      request: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="py-16 px-[4%] md:py-[8%]">
      <div className="">
        <h2 className="ml-2 font-poppins text-center">
          Let us know how we can be of help
        </h2>
        <p className="my-2 px-3 text-neutral-400 text-center text-base ">
          Please enter your information and describe your inquiry, we will get
          back to you.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-16 mb-6 mx-auto w-[94%] md:w-[80%] flex-column gap-4 md:gap-6"
      >
        <FormGroup
          name="email"
          type="email"
          label="Business Email address"
          value={values.email}
          placeholder="Email"
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="w-full flex-row gap-4">
          <FormGroup
            name="firstName"
            label="First name"
            value={values.firstName}
            placeholder="First name"
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormGroup
            name="lastName"
            label="Last Name"
            value={values.lasttName}
            placeholder="Last name"
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="w-full flex-row gap-4">
          <FormGroup
            name="company"
            label="Company nmae"
            value={values.company}
            placeholder="Name"
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormGroup
            name="job"
            label="Job title"
            value={values.job}
            placeholder="Job title"
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <FormGroup
          name="phoneNo"
          label="Phone number"
          placeholder="Phone number"
          value={values.phoneNo}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormGroup
          name="country"
          label="Country"
          value={values.country}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormGroup
          name="request"
          label="Request Description"
          type="text"
          value={values.request}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <Button type="submit" title="Submit" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default ContactPage;
