import { useState } from "react";
import { useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const cometColors = [
        {
            head: "rgba(180, 200, 255, 1)",  // icy blue
            trail: "rgba(120, 170, 255, 0.5)",
            glow: "rgba(150, 200, 255, 0.9)"
        },
        {
            head: "rgba(200, 180, 255, 1)",  // soft purple
            trail: "rgba(170, 150, 255, 0.5)",
            glow: "rgba(190, 160, 255, 0.9)"
        },
        {
            head: "rgba(160, 240, 255, 1)",  // aqua
            trail: "rgba(120, 220, 255, 0.5)",
            glow: "rgba(140, 230, 255, 0.9)"
        }
    ];

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            const color = cometColors[Math.floor(Math.random() * cometColors.length)];

            newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 8,
            animationDuration: Math.random() * 3 + 3,
            color,
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star twinkle"
                    style={{
                        "--duration": `${star.animationDuration}s`,
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                    width: meteor.size * 45 + "px",
                    height: meteor.size * 3 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: `${meteor.delay}s`,
                    animationDuration: `${meteor.animationDuration}s`,
                    opacity: 0, // hides meteor until start
                    "--meteor-head": meteor.color?.head,
                    "--meteor-trail": meteor.color?.trail,
                    "--meteor-glow": meteor.color?.glow,
                    transform: `rotate(215deg) scaleX(${1 + meteor.size * 0.3})`,
                    }}
                />
            ))}
        </div>
    );
};