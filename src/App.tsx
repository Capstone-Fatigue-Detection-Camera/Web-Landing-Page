import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Play, Camera, Shield, Zap } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownload = () => {
    // Trigger the APK download from public folder
    window.open('/Drowsy-cam.apk', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 pb-16 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <div className="relative flex items-center">
                {/* Custom logo */}
                <img 
                  src="/logo-drowsy-cam.png" 
                  alt="Drowsy Cam Logo" 
                  className="w-16 h-16 mr-4 object-contain"
                />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Drowsy Cam
                </h1>
              </div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 lg:px-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-cyan-400">AI Smart</span> Drowsiness
                  <br />
                  Alert for <span className="text-cyan-400">Safer Rides</span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Your safety matters. DrowsyCam uses real-time AI to detect signs of drowsiness and instantly alert you, 
                  providing you protection to stay awake, aware, and safe throughout every ride.
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>Real-time Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>AI Processing</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Camera className="w-4 h-4 text-cyan-400" />
                    <span>Early Warning</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="pt-4">
                <button
                  onClick={handleDownload}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-4"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-6 h-6" />
                    <span>Download for Android</span>
                  </div>
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                
                <p className="text-sm text-gray-400 mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for Android devices
                </p>
              </div>
            </div>

            {/* Right Column - Phone Mockup with Full Screen Video */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-cyan-500/20">
                  <div className="bg-black rounded-[2.5rem] p-1 relative overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                    
                    {/* Full Screen Video */}
                    <div className="rounded-[2rem] h-[600px] w-[300px] relative overflow-hidden">
                      <video 
                        src="/demo.mp4"
                        className="w-full h-full object-cover rounded-[2rem]"
                        controls
                        muted
                        autoPlay
                        loop
                        playsInline
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600' viewBox='0 0 300 600'%3E%3Crect width='300' height='600' fill='%23000000'/%3E%3Ctext x='150' y='300' font-family='Arial' font-size='16' fill='%23ffffff' text-anchor='middle' dy='.3em'%3EDemo Video%3C/text%3E%3C/svg%3E"
                      >
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Subtle overlay for phone screen effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none rounded-[2rem]"></div>
                      
                      {/* Status bar overlay (optional - can be removed if not needed) */}
                      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 rounded-t-[2rem]"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-4">
              Driven by Innovation for <span className="text-cyan-400">Safeness</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our technology is engineered to keep riders alert and safe on every journey
            </p>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Powered by AI. Driven by Safety</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;