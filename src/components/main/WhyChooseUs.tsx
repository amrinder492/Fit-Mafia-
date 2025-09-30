import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div>
      {/* why choose */}
      <section className="bg-fit-red text-white h-full">
          <div className="flex max-md:flex-wrap justify-between gap-5 px-10 md:px-16">
            <div className="md:w-1/3  max-md:pt-5 w-full flex justify-center items-center">
              <div className="relative rounded-lg overflow-hidden h-[200px] sm:h-[250px] md:h- [300px] w-full my-auto">
                <Image
                  src={"/plan-images/single/2.jpg"}
                  alt="image"
                //   className="img1 w-[460px] object-contain"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  loading="lazy"
                  fill 
                //   height={300}
                //   width={300}
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div
                className="text-start py-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-3xl font-bold mb-2">Meet The Mafia</h2>
                <h3 className="">
                  We’re more than just a tiffin service — we’re a passionate team of chefs, nutritionists, and food lovers on a mission to fuel your busy life with real, balanced meals.
                </h3>
                <p className="my-2 text-xl font-semibold mb-4">
                &quot;Healthy food shouldn’t be boring or time-consuming. That’s why we created Fit Mafia — to make eating clean easy, exciting, and effortless.&quot;
                </p>
                <Link href='/contact-us'>
                <button className="font-semibold px-2 py-1 rounded-lg bg-white text-fit-red" >
                  Contact Now
                </button>
                </Link>

              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default WhyChooseUs
