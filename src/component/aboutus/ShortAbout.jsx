import React from 'react'

export default function ShortAbout() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-8 bg-slate-100 p-8 md:px-[20px] lg:px-[85px] mid:gap-2 mid:px-4">
                <div className="w-full md:mt-[60px] h-[300px] md:h-[450px] sm:h-[300px] sm:mb-14 lg:w-[40%] rounded-lg mt-1 mb-4 mid:h-[350px] mid:mb-2">
                    <img 
                        src="shortAbout.jpg" 
                        alt="shortAbout" 
                        className="rounded-lg md:h-[520px] sm:w-[520px] md:w-[520px] mid:w-full mid:h-full object-cover"
                    />
                </div>
                <div className="w-full md:mt-0 lg:md:flex-1 p-[50px] lg:py-[56px] py-12 px-0 mt-[55px] sm:mt-[100px] lg:mt-0 mid:px-4 mid:py-4 mid:mt-2">
                    <p className="mb-5 lg:mb-7 midt:text-[40px] md:text-[30px] lg:text-[50px] lg:mt-0 text-4xl font-bold text-black mid:text-[28px] mid:leading-tight">
                        Grow your <span className="font-black lg:mb-6 text-yellow-400">BUSINESS</span>
                    </p>
                    <p className="text-sm font-thine mb-10 lg:text-[15px] text-black text-justify mid:text-[14px] mid:leading-relaxed">
                        Welcome to UFOCube – your trusted partner for business growth and digital innovation in Jamshedpur and beyond.

                        Located in the heart of Jamshedpur, UFOCube is a passionate team of tech experts, designers, and strategists committed to helping startups and businesses thrive. We turn your ideas into impactful digital solutions.

                        As a leading Web Development Company in Jamshedpur, we create stunning, user-friendly websites tailored to your brand. Our Digital Marketing Services – including SEO, Social Media Marketing, and Online Ads – ensure your brand reaches the right audience.

                        Want to build a strong identity? Our Branding & Graphic Design Services leave a lasting impression. We also provide Business Consulting, helping startups and local businesses grow with smart, scalable strategies.

                        From E-commerce Solutions and Mobile App Development to Content Marketing, Lead Generation, and Website Maintenance, UFOCube is your all-in-one digital partner.

                        We don’t just offer services—we deliver results. Let UFOCube help your business adapt, grow, and lead in the digital era.

                        UFOCube – Where Innovation Meets Growth.
                    </p>

                    <a className="px-10 py-3 rounded-[30px] text-white bg-green-700 hover:bg-black font-medium text-lg text-center mid:px-8 mid:py-2" href="/">
                        Know More
                    </a>
                </div>
            </div>
        </>
    )
}
