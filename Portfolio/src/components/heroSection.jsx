const HeroSection = () => {
    return(
        <>
         <main className="noise ">
        <div
            class="heroSection flex flex-col relative justify-center items-center h-[85vh] text-white overflow-hidden"
        >
            <div class="image-layer flex justify-center items-center relative">
            <img
                src="src/assets/3.png"
                class="w-56 h-56 sm:w-80 sm:h-80 absolute z-10 drop-shadow-2xl animate-bounce"
                alt="Main Layer"
            />
            <img
                src="src/assets/3.png"
                class="w-56 h-56 sm:w-80 sm:h-80 z-0 opacity-70"
                alt="Background Layer"
            />
            <img
                src="src/assets/3.png"
                class="w-56 h-56 sm:w-80 sm:h-80 z-0 opacity-70"
                alt="Faded Background Layer"
            />
            </div>

            <h1
            class="heroHeading my-4 mb-0 sm:mb-4 mt-4 sm:mt-0 font-[Chewy] text-4xl sm:text-6xl leading-6 text-center z-10"
            >
            Some call it Productivity,
            <span class="block text-4xl sm:text-6xl mt-2">
                we call it <span>Pookie-Den Magic!</span>
            </span>
            </h1>
        </div>
    </main>
        </>
    )
}
export default HeroSection;