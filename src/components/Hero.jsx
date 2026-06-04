function Hero() {
    return (
        <div className="max-w-4xl min-h-screen flex flex-col justify-center px-8 mx-auto">
            <div className="font-dm-sans flex items-center gap-2 bg-[#1a1a1a] border border-[#222] rounded-full px-4 py-1 text-sm text-gray-400 mb-6  w-fit"><span className="w-2 h-2 rounded-full bg-[#c8f135] pulse"></span> Open to work &#x2027; Delhi-NCR</div>
            <h1 className="font-syne text-4xl md:text-6xl mb-2 leading-tight text-white">Sadik Saifi</h1>
            <h2 className="font-syne text-4xl md:text-6xl text-[#c8f135] mb-6">Frontend Developer</h2>
            <div className="font-dm-sans text-gray-500 text-lg max-w-lg mb-10">BCA student at MDU Faridabad, building clean and user-focused interfaces. Currently learning React — already shipping.</div>
            <div className="flex gap-4">
                <a href="#projects" className=" font-dm-sans bg-[#c8f135] px-7 py-3 rounded-full text-sm hover:opacity-80 active:scale-95 transition-all duration-200">View my work</a>
                <a href="#contact" className="font-dm-sans border border-[#444] px-7 py-3 rounded-full text-sm text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-200">Get in touch</a>
            </div>
        </div>
    )
}

export default Hero
