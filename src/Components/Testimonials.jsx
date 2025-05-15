import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        name: "Karthik Viswanathan",
        position: " Enqbot Technologies",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "I had the pleasure of working with Zahid. He is an outstanding HTML/CSS developer who delivered excellent results for our MVP at an incredibly affordable cost. The code clarity was amazing, making it easy for our team to integrate and move forward without any hiccups. The work was completed ahead of schedule, which was crucial for our tight timelines. I highly recommend Zahid to any startup founder looking to get high-quality development work done efficiently. Truly a top-tier professional ideal for fast-paced projects!",
    },
    {
        id: 2,
        name: "Aleksandrs Matvejevs",
        position: " Rudimenta limited",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        review:
            "Zahid is a professional in his field and can deliver needed job on time. He is communicative and understand everything what is needed clearly, and if there are any uncertainties it is very easily solvebale with Zahid.Can highly recommend Zahid for any of the job you have in his expertise field. It was real pleasure to work with him and will be looking forward to hire him again once we have a similar task!",
    },
    {
        id: 3,
        name: "Sarah Blake",
        position: "Marketing Manager, XYZ Ltd",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "Zahid is a Pro level Front-end developer with a deep understanding of project requirements. He consistently delivers exceptional results, ensuring pixel-perfect layouts and high standards of quality. He completed my webpage within the first 24 hours. I am thoroughly pleased with the final outcome and highly recommend him.",
    },
    {
        id: 4,
        name: "James Wilson",
        position: "Founder, Startup Co.",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        review:
            "Zahid was a pleasure to work with on our Figma-to-HTML project. He transformed complex designs into high-quality, responsive code for both desktop and mobile. His attention to detail, proactive communication, and ability to work independently were impressive. Zahid also enhanced features to ensure a seamless user experience. I highly recommend him for any front-end development projects—he delivers outstanding work on time!",
    },
];

const Testimonials = () => {
    return (
        <div className="flex flex-col mt-20 px-4">
            {/* Heading */}
            <div className="flex items-center w-fit mb-4 border border-[#333333] rounded-4xl text-white px-4 py-2 tracking-widest gap-2 text-sm font-light">
                <i className="fa-light fa-comment-dots"></i>
                <h1>Testimonials</h1>
            </div>

            <h1 className="text-[28px] md:text-[38px] text-light font-normal tracking-normal mb-5">
                Here’s what my clients say
            </h1>

            {/* Cards */}
            <div className="w-full max-w-7xl relative flex flex-col items-center">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    className="w-full"
                >
                    {testimonials.map((testimonial) => (
                   <SwiperSlide key={testimonial.id} className="flex">
                   <div className="flex flex-col justify-between bg-gradient-to-b from-primary to-[#090c0780] p-6 rounded-2xl border border-[#333333] text-white transition-all duration-300 w-full h-full" style={{ background: "#1e1e1e", minHeight: "400px" }}>
                     {/* Stars */}
                     <div className="flex mb-3">
                       {Array(5).fill().map((_, i) => (
                         <svg
                           key={i}
                           className="w-5 h-5 text-[#fcbf24]"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                         >
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.071 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.071-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.071-3.292z" />
                         </svg>
                       ))}
                     </div>
                 
                     {/* Review */}
                     <p className="text-[#f4f4f5] text-[13px] font-play font-light leading-relaxed mb-4">
                       {testimonial.review}
                     </p>
                 
                     {/* User Info */}
                     <div className="flex items-center gap-4">
                       <img
                         src={testimonial.image}
                         alt={testimonial.name}
                         className="w-14 h-14 rounded-full object-cover"
                       />
                       <div>
                         <h4 className="text-lg font-medium leading-5 font-play text-secondary">
                           {testimonial.name}
                         </h4>
                         <p className="text-[#979F90] font-normal text-[12px]">
                           {testimonial.position}
                         </p>
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
                 
                    ))}
                </Swiper>

                {/* Pagination outside */}
                <div className="flex justify-center mt-4">
                    <div data-hover className="swiper-pagination"></div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>
                {`
                    .swiper-slide {
                      height: auto;
  display: flex;
                        opacity: 0.5;
                        filter: blur(2px);
                        transition: all 0.3s ease;
                    }
                    .swiper-slide-active {
                        opacity: 1;
                        filter: blur(0px);
                        transform: scale(1.05);
                    }
                    .swiper-pagination {
                        position: relative !important;
                        bottom: auto !important;
                        margin-top: 20px;
                    }
                    .swiper-pagination-bullet {
                        background-color: #3e3e3e;
                        opacity: 1;
                        width: 8px;
                        height: 8px;
                        margin: 0 6px;
                        cursor: pointer;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #A9FF5C;
                    }
                `}
            </style>
        </div>
    );
};

export default Testimonials;