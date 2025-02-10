import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import CountryList from "country-list-with-dial-code-and-flag";
import { motion, useInView, useAnimation } from "framer-motion";
import { titleVariants } from "../../../utils";
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }
  return (
    <form className="space-y-4 md:space-y-6 w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          နာမည်
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
              : "focus:ring-orange-400 focus:border-orange-400 border-gray-300  "
          } disabled:opacity-75 bg-transparent border border-orange-400 focus:ring-orange-500 focus:border-orange-500  text-gray-900 text-sm rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
        {errors.name?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">Name is required !</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-red-500 mt-2 text-sm">
            နာမည်အနည်းဆုံး(၃)လုံးဖြစ်ရမည်!
          </p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-red-500 mt-2 text-sm">
            နာမည်အများဆုံး(၁၀)လုံးဖြစ်ရမည်!
          </p>
        )}
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          အီးမေးလ်
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
              : "focus:ring-orange-400 focus:border-orange-400 border-gray-300  "
          } disabled:opacity-75 bg-transparent border rounded-full border-orange-400  text-gray-900 text-sm focus:ring-orange-500 focus:border-orange-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500`}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">Email is required !</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500 mt-2 text-sm">Invalid email address !</p>
        )}
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          ဖုန်းနံပါတ်
        </label>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="flex rounded-full "
        >
          <select
            id="states"
            className="bg-transparent text-gray-900 text-sm inline-block w-28 focus:border-orange-400 focus:ring-0 border border-orange-400 border-e-0 rounded-full rounded-e-none disabled:opacity-75  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
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
                : "focus:ring-orange-400 focus:border-orange-400 border-gray-300  "
            } disabled:opacity-75 bg-transparent border border-orange-400  text-gray-900 text-sm rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-s-none border-s-0 border-s-none`}
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
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <label
          htmlFor="Message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-pacifico"
        >
          သတင်းစကား
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
              : "focus:ring-orange-400 focus:border-orange-400 border-gray-300  "
          } disabled:opacity-75 bg-transparent border border-orange-400 focus:ring-orange-500 focus:border-orange-500  text-gray-900 text-sm rounded-2xl  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className="flex justify-center items-center"
      >
        <button className="bg-orange-500 px-6 py-3 rounded-full text-white w-full sm:w-auto ">
          ဆက်သွယ်ရန်
        </button>
      </motion.div>
    </form>
  );
};

export default ContactForm;
