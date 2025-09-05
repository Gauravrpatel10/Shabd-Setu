import react from "react";

function Hero() {
    return (
        <section className="bg-sky-50 py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Title logo */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
                    Shabd-Setu
                </h1>
                {/* somthing motivation line */}
                <p className="mt-4 text-xl text-gray-600">
                    Bridge of Words & Ideas
                </p>
                {/* main butten for writing blog */}
                <a
                    href="#"
                    className="mt-8 inline-block bg-sky-600 text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-sky-700 transition duration-300 shadow-xl"
                >
                    Start Writing
                </a>

            </div>
        </section>
    );
}

export default Hero;