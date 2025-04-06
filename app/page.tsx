import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ededed] p-6 md:p-10">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <div className="text-sm md:text-base">
          <h1 className="font-bold">Aditya</h1>
          <h2 className="font-bold">Menon</h2>
        </div>
        <div className="text-xs md:text-sm text-center">
          <p>Data Analyst - Data Scientist</p>
          <p>2023 - Present</p>
        </div>
        <button className="border border-[#ededed] rounded-full px-6 py-2 text-sm">
          CONTACT
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col justify-center">
        {/* Giant text */}
        <div className="py-12 md:py-20">
          <h2 className="text-[#888888] text-5xl md:text-9xl font-bold leading-none">
            DATA
            <span className="block">SCIENTIST</span>
          </h2>
        </div>

        {/* About section */}
        <div className="md:max-w-md md:ml-auto mt-4">
          <h3 className="text-sm font-bold mb-2">ABOUT</h3>
          <p className="text-sm leading-relaxed">
            I am data scientist based in Michigan, USA focused on creating
            interactive digital experiences on the web, working with brands and industry
            leaders such as GOOGLE FONTS, PAYSTACK, HEVA HEALTH, DISNEY, JELLY,
            and NULL amongst others to achieve this.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-end py-4">
        <div className="flex flex-col items-end">
          <p className="text-sm mb-1">Scroll down</p>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#ededed]"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </footer>
    </div>
  );
}
