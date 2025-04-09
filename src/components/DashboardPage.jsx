import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function DashboardPage() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleLogoClick = () => setShowFeatures(!showFeatures);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowFeatures(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const pluginTabs = [
    "All Plugins", "Essentials", "Popular Plugins", "Server Management",
    "Utilities", "Social Alerts", "Games & Fun", "Web3"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md text-gray-800">
        <div className="flex items-center gap-4">
          <img
            src="/vanbotlogo.png"
            alt="VanBot Logo"
            className="w-10 h-10 cursor-pointer"
            onClick={handleLogoClick}
          />
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 text-transparent bg-clip-text drop-shadow-sm tracking-wider animate-pulse">
            VanBot
          </h1>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">Invite</Button>
          <Button variant="ghost">Support Server</Button>
        </div>
      </header>

      {showFeatures && (
        <div className="absolute left-4 top-20 z-10 w-60 bg-white text-gray-800 rounded-xl shadow-lg p-4">
          <h2 className="font-semibold text-lg mb-3">Features & Settings</h2>
          <ul className="space-y-2">
            {["home", "levels", "profile", "welcome", "autorole", "reaction", "moderation", "commands", "music", "logs", "ai"].map((tab) => (
              <li key={tab}>
                <button onClick={() => handleTabChange(tab)}>
                  {tab === "home" ? "🏠 Home" : `• ${tab}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <main className="p-6">
        {activeTab === "home" && (
          <section className="mb-10">
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 min-h-[250px] rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Welcome back, Master 👑</h2>
                <p className="text-lg">Your Personal Van Bot</p>
                <p className="text-sm mt-1">bring Van Bot features to your Discord server ✨</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button variant="secondary">Invite</Button>
                  <Button variant="secondary">Support Server</Button>
                </div>

                <img
                  src="https://www.klipartz.com/cdn-cgi/image/width=400,height=400,quality=90,format=auto/uploads/preview/anime-hd-png-11554073222e3vq2vufyk.png"
                  alt="Akeno Himejima"
                  className="absolute bottom-2 right-4 w-32 sm:w-40 md:w-48 opacity-90 pointer-events-none select-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-4">Plugins</h3>
              <div className="flex flex-wrap gap-2 overflow-x-auto">
                {pluginTabs.map((tab) => (
                  <div
                    key={tab}
                    className="shrink-0 px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-sm hover:bg-opacity-20 transition"
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="text-center text-xs text-gray-400 p-4">
        &copy; 2025 <span className="font-semibold">NovanProject</span> • All rights reserved
      </footer>
    </div>
  );
}
