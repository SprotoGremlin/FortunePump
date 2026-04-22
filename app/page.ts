'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FortunePump() {
  const [amount, setAmount] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);

  const handlePump = () => {
    setIsSpinning(true);
    
    // Placeholder για τώρα
    setTimeout(() => {
      setIsSpinning(false);
      alert("🎰 You received $RAVE!\n\n(Real logic coming soon)");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#0A0A1F] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🌀</div>
          <div>
            <div className="font-black text-3xl tracking-[-2px]">FORTUNE PUMP</div>
            <div className="text-[#0052FF] text-xs -mt-1 tracking-[3px]">BUILT FOR BASE</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="px-4 py-1.5 bg-white/5 rounded-full">Base Sepolia</div>
          <div className="px-4 py-1.5 bg-white/5 rounded-full">0.0004 ETH</div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 pt-8">
        
        {/* Machine */}
        <div className="relative max-w-[560px] w-full">
          <img 
            src="/fortune-pump.png" 
            alt="Fortune Pump Machine" 
            className="w-full rounded-3xl border-[6px] border-[#0052FF] shadow-[0_0_80px_#0052FF]"
          />

          {/* Big Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={handlePump}
            disabled={isSpinning}
            className="absolute bottom-[72px] left-1/2 -translate-x-1/2 px-20 py-6 bg-[#FF2D55] hover:bg-[#FF1A40] text-white font-black text-4xl rounded-2xl shadow-[0_0_60px_#FF2D55] border-[5px] border-white disabled:opacity-70 transition-all flex items-center gap-4 tracking-wider"
          >
            {isSpinning ? "SPINNING..." : "PUMP MY FORTUNE"}
          </motion.button>
        </div>

        {/* Amount Selector */}
        <div className="mt-10 flex gap-5">
          {[1, 10].map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`px-14 py-4 rounded-2xl font-bold text-2xl transition-all border-2 ${
                amount === amt 
                  ? 'bg-[#0052FF] border-[#0052FF] text-white scale-105' 
                  : 'bg-transparent border-white/30 hover:border-white/60'
              }`}
            >
              ${amt}
            </button>
          ))}
        </div>

        <p className="mt-8 text-gray-400 text-sm max-w-[280px] text-center">
          Insert USDC → Spin the wheel → Receive a random fresh pump
        </p>
      </div>
    </div>
  );
}
