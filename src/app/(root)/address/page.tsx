"use client";
import axios from "axios";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  street: string;
  addressLine2: string;
  city: string;
  province: string;
  postalCode: string;
  phoneNumber: number;
  deliveryInstructions: string;
};

const Page = () => {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    console.log('data---', data)
    try {
      const res = await axios.post("", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="w-full h-full bg-[#f1f1ea] p-12">
      <div className="flex md:flex-row flex-col justify-center max-w-[1140px] w-full gap-6 h-full mx-auto">
        {/* form section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[682px] p-6 mb-6 min-h-[630px]  h-auto bg-white rounded-lg shadow-md lg:w-2/3 lg:mb-0"
        >
          <h2 className="mb-4 text-2xl font-bold text-black">
            Delivery Address
          </h2>
          <div className="flex flex-col gap-6">
            {/* name section */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <input
                  className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="first-name"
                  type="text"
                  placeholder=" First name *"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="last-name"
                  type="text"
                  placeholder="Last name *"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            {/* address section 1 */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <input
                  className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="street"
                  type="text"
                  placeholder=" Street *"
                  {...register("street", {
                    required: "Street is required",
                  })}
                />
                {errors.street && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.street.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="address-line-2"
                  type="text"
                  placeholder=" Address line 2"
                  {...register("addressLine2")}
                />
              </div>
            </div>
            {/* address section 2 */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
              <div>
                <input
                  className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="city"
                  type="text"
                  placeholder=" City *"
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <select
                  className="block outline-none w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="province"
                  {...register("province", {
                    required: "Province is required",
                  })}
                >
                  <option value="province">Province *</option>
                </select>
                {errors.province && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.province.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="postal-code"
                  type="text"
                  placeholder="Postal Code *"
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
            </div>
            {/* phone number */}
            <div className="mb-4">
              <input
                className="outline-none block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black "
                id="phone-number"
                type="text"
                placeholder="Phone Number *"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            {/* delivery instructions */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter Delivery Instruction
              </label>
              <select
                className="w-full max-w-screen outline-none p-3 mt-1  border border-gray-300 rounded-md shadow-sm text-black"
                id="province"
                {...register("deliveryInstructions", {
                  required: "Delivery Instructions are required",
                })}
              >
                <div className="w-32">
                <option className="w-20" value="Leave at front door">Leave at front door</option>
                <option className="w-20" value="Leave at back door">Leave at back door</option>
                <option className="w-20" value="Others">Others</option>
                </div>
              </select>
              {errors.deliveryInstructions && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.deliveryInstructions.message}
                </p>
              )}
            </div>
            <button
              className="w-full px-4 py-2 font-bold text-white rounded-md bg-fit-red/80"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
        {/* order summery section */}
        {/* <div className="flex flex-col w-full gap-3 lg:w-1/3">
          <div className="flex flex-col gap-3 p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Order summary
            </h2>
            <div className="flex items-center mb-4">
              <img
                alt="Image of meal box"
                className="w-12 h-12 mr-4"
                src="/temp/Calorie-Smart.avif"
              />
              <div>
                <p className="text-lg font-semibold text-black">
                  10 meals per week
                </p>
                <p className="text-sm text-gray-600">
                  10 servings at $13.49 each
                </p>
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Box price</span>
                <span>$134.90</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="text-sm text-green-600 cursor-pointer">
                Apply promo code
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 mb-4 bg-gray-100 rounded-md">
              <span className="font-semibold text-black">First box total</span>
              <span className="text-xl font-bold text-black">$144.89</span>
            </div>
          </div>

          <div className="p-2 mb-4 text-center text-black rounded-md bg-[#ffd6d2]">
            You can skip a week or cancel at any time.
          </div>
          <div className="flex items-center">
            <img
              alt="Image of meal box"
              className="w-12 h-12 mr-4"
              src="/temp/Calorie-Smart.avif"
            />
            <p className="text-sm text-gray-600">
              No need to be home for delivery - our insulated boxes keep your
              temperature-sensitive ingredients cool and fresh.
            </p>
          </div>
        </div> */}
      </div>
    // </div>
  );
};

export default Page;
