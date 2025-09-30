"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
// import { sendEmail } from "@/lib/sendEmail";
import axios from "axios";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUsForm = ({fc}:{fc: ()=> void}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    try {
      const finalData = {
        ...data,
        subject: "From Contact Form in contact-us route"
      }
      // console.log("Form submitted:", finalData);
      const res = await axios.post('api/v1/sendEmail', finalData)
       if (res.status === 200) {
        toast.success(res?.data?.message || 'Successfully Submitted')
         reset();
         fc();
       }
    } catch (error) {
        console.log(error)
      toast.error('Something went wrong' )
    }
  };
  return (
    <div className="bg-white p-4 rounded-xl">
      {/* Right Form Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-extra-dark-red">
          Contact Us Form
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 bg-white"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 bg-white"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 bg-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 bg-white"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <textarea
              placeholder="Your message..."
              rows={4}
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 bg-white"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="sm:col-span-2 w-full py-3 rounded-xl bg-fit-red text-white bg-extra-dark-red hover:bg-dark-red  transition font-medium tracking-wider shadow-md text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Submit */}
            {isSubmitting ? (
              <Loader className="animate-spin w-fit mx-auto" />
            ) : (
              "Submit"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUsForm;
