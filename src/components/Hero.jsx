function Hero() {
    return (
        <div className="max-w-4xl min-h-screen flex flex-col justify-center px-8 mx-auto">
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#222] rounded-full px-4 py-1 text-sm text-gray-400 mb-6  w-fit"><span className="w-2 h-2 rounded-full bg-[#c8f135] pulse"></span> Open to work &#x2027; Delhi-NCR</div>
            <h1 className="font-syne text-6xl mb-2 leading-tight text-white">Sadik Saifi</h1>
            <h2 className="font-syne text-6xl text-[#c8f135] mb-6">Frontend Developer</h2>
            <div className="text-gray-400 text-lg max-w-lg mb-10">BCA student at MDU Faridabad, building clean and user-focused interfaces. Currently learning React — already shipping.</div>
            <div className="flex gap-4">
                <a href="#projects" className="bg-[#c8f135] px-7 py-3 rounded-full text-sm">View my work</a>
                <a href="#contact" className="border border-[#444] px-7 py-3 rounded-full text-sm text-white">Get in touch</a>
            </div>
        </div>
    )
}

export default Hero
