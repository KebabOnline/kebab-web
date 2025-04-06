import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
});

export default function KebabmonPage() {
    return (
        <main>
            <div className={`flex flex-col items-center justify-center p-6 lg:p-24 ${pressStart2P.className}`}>
                <h1 className="text-4xl font-bold mb-4">Kebabmon</h1>

                <div className="max-w-md pt-6">
                    <p className="text-lg mb-4">
                        Kebabmon is a new ROM hack based on Pokémon Red and Blue.
                    </p>

                    <p className="text-lg mb-6">
                        Discover a reimagined Kanto with improved mechanics and new features, all while keeping the charm of the original Pokémon games.
                    </p>
                    
                    <a 
                        href="https://github.com/kebabonline/kebabmon" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-center inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-xl hover:bg-blue-800 transition duration-300"
                    >
                        Check out on GitHub
                    </a>
                </div>
            </div>
        </main>
    )
}