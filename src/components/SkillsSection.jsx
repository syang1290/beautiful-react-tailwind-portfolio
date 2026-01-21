import { useState } from "react";
import { cn } from "@/lib/utils";

const skills= [
    {name: "HTML/CSS", level: 55, category: "frontend"},
    {name: "JavaScript", level: 60, category: "frontend"},
    {name: "React", level: 60, category: "frontend"},
    {name: "Next.js", level: 30, category: "frontend"},
    {name: "Tailwind CSS", level: 70, category: "frontend"},
    {name: "Typescript", level: 60, category: "frontend"},
    {name: "Node.js", level: 70, category: "backend"},
    {name: "Git/Github", level: 70, category: "tools"},
    {name: "VS Code", level: 100, category: "tools"},
    {name: "Java", level: 80, category: "backend"},
    {name: "Python", level: 90, category: "backend"}
];

const StarRating = ({ level }) => {
  const stars = Math.round(level / 20); // convert % to 1–5
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < stars ? "text-yellow-400" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );
};


const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
        const [activeCategory, setActiveCategory] = useState("all");

        const filteredSkills = skills.filter(
            (skill) => activeCategory === "all" || skill.category === activeCategory
        );
    return (<section 
         id="skills" 
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} 
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"

                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grind-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (

                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    {/* Name + Stars on the same row */}
                    <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <StarRating level={skill.level} />
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full w-full" />
                    </div>
                    </div>

            ))}
            </div>
        </div>
    </section>
    );
};