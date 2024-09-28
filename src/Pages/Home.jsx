// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <section className="home relative h-screen overflow-hidden">
                <div className="absolute inset-0 flex text-white justify-center items-center z-10">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-4">
                            SUMBA <br/>
                            ELECTRICAL<br/>
                            AGENCY
                        </h1>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className='background-image'>
                        <img src="/image2.jpeg" alt="Slide 1" className="w-full h-screen object-cover"/>
                    </div>
                    <div>
                        <img src="/image2.jpeg" alt="Slide 2" className="w-full h-screen object-cover"/>
                    </div>
                    <div>
                        <img src="/image2.jpeg" alt="Slide 3" className="w-full h-screen object-cover"/>
                    </div>
                </Slider>
            </section>
            {/* <section className="relative min-h-screen flex items-start justify-center py-8 sm:py-6 md:py-4 lg:py-2">
                <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-lg p-4 lg:p-8 max-w-6xl w-full gap-4">
                    <div className="first-content mb-2 text-center md:text-left md:flex-1">
                        <h2 className="text-lg sm:text-xl font-bold mb-4">WE CREATE MASS <br/>PUBLIC'S EYE</h2>
                        <span className="text-xl sm:text-2xl text-red-500 font-semibold">ATTENTION</span>
                    </div>
                    <div className="other-content text-center md:text-left md:flex-1 px-2">
                        <p className="text-sm sm:text-base leading-relaxed">
                            We are a value-driven organization. Our core values inspire us to push our boundaries and set benchmarks for others and have them believe that our organization is top class.
                        </p>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Home;
