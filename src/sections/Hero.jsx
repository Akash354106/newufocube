import React from 'react';

export default function Hero() {
    return (
        <section className="relative">
            <div>
                <img src="hero.jpg" alt="UFOcube Hero Banner" className="w-full h-auto " />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-start px-4 md:px-10 lg:pl-[66px] lg:pt-12 pl-[40px] md:pl-[80px] pb-[90px]  w-full md:text-[12px] md:mt-0 mt-12 sm:mt-0 lg:ml-12">
                    <div className='lg:mb-[90px]'>
                        <p className="mt-[70px] lg:mt-[120px] sm:text-[25px] text-[20px] mid:text-[13px] md:text-[25px] lg:text-3xl text-white midt:text-[27px] midt:mt-[150px]">We Grow your</p>
                        <p className="text-[34px] midt:text-[60px] mid:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[75px] font-black text-yellow-400">BUSINESS</p>
                        <p className="text-[13.5px] mid:text-[10px] sm:text-[19px] md:text-[20px] lg:text-[34px] font-semibold text-white midt:text-[27px] ">by bringing your Business Online</p>
                        <p className="text-[5px] mid:text-[4px] sm:text-[7px] font-[100] lg: text-white mt-2 md:text-[8px] lg:text-[15px] midt:text-[13px]">
                            Bringing your business online helps you reach more customers, increase <br className="hidden md:block" />
                            visibility, <br className="block md:hidden" />boost sales, and build stronger customer relationships. It’s a cost-<br className="hidden md:block" />effective way to <br className="block md:hidden" />stay competitive, access valuable insights, and grow your <br className="hidden md:block" />business in today’s digital <br className="block md:hidden" />world.Let us help you take your business to the <br className="hidden md:block" /> next level!
                        </p>
                        <a
                            className="mt-3 md:mt-7 text-[8px] mid:text-[6px] lg:text-[12px] px-4 py-1  rounded-[25px] w-[100px] mid:w-[80px] md:w-[120px]  lg:w-[150px] lg:p-3 bg-white text-black text-center inline-block"
                            href="/"
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
