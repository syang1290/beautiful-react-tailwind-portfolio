import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <div className="-mt-4">
                <span className="block opacity-0 animate-fade-in">
                    Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text font-extrabold opacity-0 animate-fade-in-delay-1">
                    Steve Yang
                </span>
            </div>

          </h1>

          {/* Profile Image */}
          <div className="flex justify-center opacity-0 animate-fade-in-delay-2">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300">
              <img
                src="/SteveYang.jpg"
                alt="Steve Yang"
                className="w-full h-full object-cover scale-125 object-[50%_28%]"
              />
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a CS Major @ UC Irvine. Grad 2029. I love coding and I'm always
            looking for new things to try! Interested in machine learning and front/backend development.
          </p>

          {/* CTA */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
