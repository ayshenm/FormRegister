import {useState} from "react";
import { useFormik } from "formik";
import { registerFormShemas } from "../schemas/RegisterFormSchemas";

const RegisterForm = () => {

  const [successMessage, setSuccessMessage] = useState("");

 
  const submit = (values, { resetForm }) => {
    console.log(values);
    setTimeout(() => {
      resetForm(); // Formu sıfırlamaq üçün resetForm metodunu istifadə edin
      setSuccessMessage("Success Register🎉"); // Uğurlu qeydiyyat mesajı
      setTimeout(() => setSuccessMessage(""), 3000); // 3 saniyə sonra mesajı silmək
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit,isSubmitting,touched } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
   validationSchema : registerFormShemas,
   onSubmit: submit
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 p-6 w-full max-w-md mx-auto bg-white shadow-md rounded-lg">
      <div className="flex flex-col gap-y-1">
        <label className="text-gray-700 font-medium" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          type="text"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
      </div>

      <div className="flex flex-col gap-y-1">
        <label className="text-gray-700 font-medium" htmlFor="age">
          Age:
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="age"
          type="number"
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && touched.age && <div className="text-red-500">{errors.age}</div>}
      </div>

      <div className="flex flex-col gap-y-1">
        <label className="text-gray-700 font-medium" htmlFor="password">
          Password:
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
      </div>

      <div className="flex flex-col gap-y-1">
        <label className="text-gray-700 font-medium" htmlFor="confirmpassword">
          Confirm Password:
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && touched.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
      </div>

      <div className="flex items-start gap-x-2">
        <input
          id="term"
          type="checkbox"
          className="w-5 h-5 accent-blue-600 cursor-pointer"
          checked={values.term}
          onChange={handleChange}
        />
        <label htmlFor="term" className="text-gray-600 text-sm">
          By registering, I confirm that I accept the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </label>
        
      </div>
      {errors.term && touched.term && <div className="text-red-500">{errors.term}</div>}

      <button
       disabled={isSubmitting}
        type="submit"
        className="cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
        Register
      </button>
      {successMessage && (
        <div className="text-green-600 mt-4 text-center">{successMessage}</div>
      )}

    </form>
  );
};

export default RegisterForm;
