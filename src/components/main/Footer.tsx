"use client"

import { linkAccount, linkShop } from "@/constants/data";
// import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
// import { SubmitHandler, useForm } from "react-hook-form";
// import RefreshIcon from '@mui/icons-material/Refresh';
// import axios from "axios";
// import { toast } from "react-toastify";


  // interface FormValues {
  // phoneNumber: string;
  // };

const Footer = () => {
  // const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>();

  // const onSubmit: SubmitHandler<FormValues> = async (data) => {
  //   console.log('Submitted Email:', data?.phoneNumber);
  //   try {      
  //     const res = await axios.post('/api/v1/newsletter', data);
  //     console.log('res-----:', res);
  //     if(res.status === 200) {
  //       console.log('res 1-----:', res);
  //       toast.success(res?.data?.message || 'Email sent successfully')
  //       reset();
  //     }
  //     if(res.status === 400) {
  //       console.log('res 2-----:', res);
  //       toast.success(res?.data?.message || 'Email sent successfully')
  //       reset();
  //     }
  //   } catch (error) {
  //     console.log('Submission error:', error);
  //     toast.error('Something went wrong')
  //   }
  // };

  return (
    <div className="w-full flex flex-col bg-white px-4 md:px-12 pt-12 items-center">
      <div className=" w-full flex flex-col lg:flex-row max-lg:items-center justify-center gap-4">
        {/* links section */}
        <div className="max-w-[805px] pb-5 w-full h-full flex flex-col gap-3 justify-center lg:justify-start">
          {/* Factor */}
          <div className="max-w- [200px] w-full h-full flex flex-col gap-2 ">
            <span className="font-bold text-[16px] leading-[24px] text-black">
              Fit Mafia
            </span>
            <div className="flex flex-wrap gap-3 sm:gap-8 w-full">
              {linkAccount?.map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.url}
                    className="font-normal text-[14px] leading-[20px] text-black hover:text-fit-red min-[450px]:whitespace-nowrap min-[450px]:text-ellipsis"
                  >
                    {e.text}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Shop */}
          <div className="max-w-[200px] w-full h-full flex flex-col gap-2">
            <span className="font-bold text-[16px] leading-[24px] text-black">
              Shop
            </span>
            <div className="flex  gap-3">
              {linkShop?.map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.url}
                    className="inline-block font-normal w-full text-[14px] leading-[20px] text-black hover:text-fit-red whitespace-nowrap"
                  >
                    {e.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* image section */}
        {/* <div className="w-full max-w-[450px] h-full flex flex-col gap-5 ">
          <h3 className="text-2xl font-bold">Subscribe to Our Newsletter and Get 20% Off</h3>
          <p>
            Carefully prepared homemade meals using fresh, high-quality
            ingredients and traditional recipes to deliver comforting flavors
            and satisfying daily tiffins.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-10 border border-black rounded-lg overflow-hidden shadow-none flex text-white">
            <input
              type="text"
              placeholder="Enter Phone Number..."
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              })}
              className="outline-none w-full sm:w-2/3 px-2 py-1 m-1 shadow-none text-black"
            />
            <button 
             type="submit" 
             disabled={isSubmitting}
             className="bg-black text-sm sm:text-base flex justify-center items-center gap-1 max-h-10 rounded-r-lg h-full w-1/3 px-1">
              {isSubmitting? <RefreshIcon className="animate-spin" /> : <>Subscription<ArrowUpRight/> </>}
              </button>
          </form>

        </div> */}
      </div>

      <div className="w-full flex items-center justify-center p-3">
        <span className="font-semibold text-sm text-black whitespace-nowrap">
          &copy; {new Date().getFullYear()} Fit Mafia
        </span>
      </div>
    </div>
  );
};

export default Footer;
