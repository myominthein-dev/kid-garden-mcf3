import React from "react";
import { useForm } from "react-hook-form";
import CountryList from "country-list-with-dial-code-and-flag";

const res = CountryList.getAll();
console.log(res);
// Response => Array<Country>
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm();
  return (
    <form className="space-y-4 md:space-y-6 w-full">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          Name
        </label>
        <input
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          type="text"
          id="name"
          disabled={isSubmitting}
          className={`${
            errors.name
              ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
              : "focus:ring-orange-300 focus:border-orange-300 border-gray-300  "
          } disabled:opacity-75 bg-white border border-orange-300 focus:ring-orange-500 focus:border-orange-500  text-gray-900 text-sm rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
        {errors.name?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">Name is required !</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-red-500 mt-2 text-sm">
            Name must be at least 3 letters !
          </p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-red-500 mt-2 text-sm">
            Name must not be at more than 50 letters !
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          Email
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
          })}
          type="email"
          id="email"
          disabled={isSubmitting}
          className={`${
            errors.email
              ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
              : "focus:ring-orange-300 focus:border-orange-300 border-gray-300  "
          } disabled:opacity-75 bg-white border rounded-full border-orange-300  text-gray-900 text-sm focus:ring-orange-500 focus:border-orange-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500`}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">Email is required !</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500 mt-2 text-sm">Invalid email address !</p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          Phone Number
        </label>
        <div className="flex rounded-full ">
          <select
            id="states"
            className="bg-white text-gray-900 text-sm inline-block w-28 focus:border-orange-300 focus:ring-0 border border-orange-300 border-e-0 rounded-full rounded-e-none disabled:opacity-75  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            {res.map((el) => (
              <option
                value={el.code}
                key={el.code}
                className="flex justify-center items-center gap-1 w-full "
              >
                <span className="inline-block">{el.flag}</span>{" "}
                <span className="inline-block">{el.dialCode}</span>
              </option>
            ))}
          </select>

          <input
            {...register("phone", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            type="text"
            id="phone"
            disabled={isSubmitting}
            className={`${
              errors.phone
                ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                : "focus:ring-orange-300 focus:border-orange-300 border-gray-300  "
            } disabled:opacity-75 bg-white border border-orange-300  text-gray-900 text-sm rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-s-none border-s-0 border-s-none`}
          />
          {errors.phone?.type === "required" && (
            <p className="text-red-500 mt-2 text-sm">
              Phone Number is required !
            </p>
          )}
          {errors.phone?.type === "minLength" && (
            <p className="text-red-500 mt-2 text-sm">
              Phone Number must be at least 3 letters !
            </p>
          )}
          {errors.phone?.type === "maxLength" && (
            <p className="text-red-500 mt-2 text-sm">
              Name must not be at more than 50 letters !
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="Message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          Message
        </label>
        <textarea
          {...register("message", {
            required: true,
            minLength: 10,
            maxLength: 500,
          })}
          type="text"
          rows={4}
          id="message"
          disabled={isSubmitting}
          className={`${
            errors.message
              ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
              : "focus:ring-orange-300 focus:border-orange-300 border-gray-300  "
          } disabled:opacity-75 bg-white border border-orange-300 focus:ring-orange-500 focus:border-orange-500  text-gray-900 text-sm rounded-2xl  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
        {errors.message?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">
            Message field is required !
          </p>
        )}
        {errors.message?.type === "minLength" && (
          <p className="text-red-500 mt-2 text-sm">
            Message must be at least 10 letters !
          </p>
        )}
        {errors.message?.type === "maxLength" && (
          <p className="text-red-500 mt-2 text-sm">
            Message must not be at more than 500 letters !
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
