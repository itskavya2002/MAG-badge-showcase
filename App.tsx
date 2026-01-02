
import React, { useState, useEffect, useRef } from 'react';
import { BADGES } from './constants';
import { BadgeData } from './types';
import BadgeIcon from './components/BadgeIcon';
import Logo from './assets/logo.svg';
import { 
  ChevronDown, 
  Lock, 
  Trophy, 
  Sparkles, 
  Star, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Ban, 
  MessageSquare, 
  Users, 
  PenTool,  
  Heart, 
  Calendar,
  Award,
  Globe,
  Github,
  CheckCircle2
} from 'lucide-react';



// Custom Modern X (Twitter) Logo
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

// Custom Discord Logo (Clyde)
const DiscordLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 127.14 96.36" aria-hidden="true" className={className} fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.39,80.21a105.73,105.73,0,0,0,32.77,16.15,77.7,77.7,0,0,0,7.32-11.72,67.22,67.22,0,0,1-11.72-5.74,5.69,5.69,0,0,1,1.2-1,92.81,92.81,0,0,0,67.4,0,5.69,5.69,0,0,1,1.2,1,67.05,67.05,0,0,1-11.72,5.74,77.55,77.55,0,0,0,7.32,11.72,105.54,105.54,0,0,0,32.77-16.15C129.58,52.67,125,28.86,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5.12-12.72,11.4-12.72S54,46,54,53,48.77,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.12-12.72,11.44-12.72S96.2,46,96.2,53,91,65.69,84.69,65.69Z"></path>
  </svg>
);


const App: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<BadgeData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    setIsVisible(true);

  }, []);

  

  const handleBadgeClick = (badge: BadgeData) => {
    setSelectedBadge(badge);
    setTimeout(() => {
        spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const guidelines = [
    {
      title: "Long-Term Vision",
      desc: "Understand Seismic and prove you’re a long-term community member. Focus on the run, not the sprint.",
      icon: Clock
    },
    {
      title: "Contribution Based",
      desc: "Promotions are not automatic. Real effort and consistent contribution lead to natural progression.",
      icon: Award
    },
    {
      title: "No AI Content",
      desc: "AI usage is prohibited. Focus on original art, hand-drawn content, or simple tools like Canva.",
      icon: Ban
    },
    {
      title: "Patience is Rank",
      desc: "Don't pressure about roles. Asking for promotions creates a negative impression. Let your work speak.",
      icon: ShieldCheck
    },
    {
      title: "Identity Integrity",
      desc: "Stick with your original X account and Discord username. Changing identity harms your progression.",
      icon: Users
    },
    {
      title: "Quality over Quantity",
      desc: "A single high-quality post is more valuable than several average ones. Aim for both consistency and excellence.",
      icon: PenTool
    },
    {
      title: "Community Bond",
      desc: "Meaningful messages and guidance strengthen our bonds. Be a recognized and valued member.",
      icon: MessageSquare
    },
    {
      title: "Event Presence",
      desc: "Active participation in events demonstrates your engagement and true dedication to the collective.",
      icon: Calendar
    },
    {
      title: "Seismic Identity",
      desc: "Represent Seismic on X with your PFP and bio. Your profile should reflect your pride in the journey.",
      icon: XLogo
    }
  ];

// Seismic Logo Component (Clean / Brand Style)
const SeismicLogo = () => (
  <div className="flex flex-col items-center justify-start mb-12 md:mb-20 text-center">
    {/* Logo */}
    <div className="relative flex justify-center items-center mb-6 md:mb-8">
      {/* Soft ambient glow */}
      <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl bg-[#D0B583] opacity-30" />

      <img
        src={Logo}
        alt="Seismic Logo"
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
        draggable={false}
      />
    </div>

    {/* Text */}
    <span className="uppercase font-black text-[#432F39]
      tracking-[0.45em] sm:tracking-[0.6em] md:tracking-[0.8em]
      text-xs sm:text-sm md:text-base">
      Seismic
    </span>
  </div>
);


  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F7F6E8]">
      {/* Background Animated Gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E3D6B5] blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D0B583] blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-start text-center px-6 pt-12 md:pt-20 overflow-hidden">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <SeismicLogo />
          
          <div className="flex items-center justify-center mb-6 space-x-2">
            <div className="h-[1px] w-8 md:w-12 bg-[#432F39]/20"></div>
            <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-xs font-bold text-[#432F39]">Progression Ecosystem</span>
            <div className="h-[1px] w-8 md:w-12 bg-[#432F39]/20"></div>
          </div>
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-[#151515] mb-6 tracking-tighter leading-tight md:leading-none">
            Magnitude<br /><span className="text-[#A69550] tracking-normal">Journey</span>
          </h1>
          
          <p className="text-base md:text-2xl text-[#432F39] font-light max-w-2xl mx-auto tracking-wide leading-relaxed">
            A contribution-based evolution. From Magnitude 1.0 to 9.0, your status is a reflection of your commitment to the Seismic collective.
          </p>
          
          <div className="mt-12 flex flex-col items-center space-y-8">
            <button 
              onClick={() => document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-[#432F39] text-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(67,47,57,0.5)] hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs">Access Ranks</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A69550] to-[#7E5E6E] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
            <div className="animate-bounce">
              <ChevronDown className="text-[#A69550] w-6 h-6 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Badge Progression Grid */}
      <section id="grid" className="py-16 md:py-32 px-4 md:px-12 bg-[#F0EFEF]/40 backdrop-blur-md border-y border-[#432F39]/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
            <p className="text-[#A69550] font-black text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">Official Discord Roles</p>
            <h2 className="text-3xl md:text-6xl font-black text-[#151515] mb-6 tracking-tight">Magnitude Hierarchy</h2>
            <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-[#A69550] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {BADGES.map((badge, index) => (
              <div
                key={badge.id}
                onClick={() => handleBadgeClick(badge)}
                className={`group cursor-pointer relative flex flex-col items-center p-8 rounded-3xl transition-all duration-500 hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(156,117,84,0.15)] ${
                  !badge.unlocked ? 'opacity-70 grayscale blur-[1px]' : 'opacity-100'
                } transform transition-all hover:scale-105 active:scale-95`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {!badge.unlocked && (
                  <div className="absolute top-4 right-4 z-20">
                    <Lock className="w-5 h-5 text-[#9C7554] opacity-50" />
                  </div>
                )}
                
                <div className="mb-6 relative">
                  <div 
                    className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: badge.color }}
                  ></div>
                  <BadgeIcon
                    src={badge.icon}
                    level={badge.level}
                    size="md"
                    locked={!badge.unlocked}
                  />

                </div>

                <div className="text-center space-y-2">
                   <p className="text-[#432F39] font-black text-[10px] tracking-[0.4em] uppercase opacity-70">Magnitude</p>
                   <h3 className="text-3xl font-black text-[#151515] group-hover:text-[#A69550] transition-colors">{badge.level}.0</h3>
                   <div className="pt-4 flex items-center justify-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-1 h-1 rounded-full bg-[#A69550]"></div>
                      <div className="w-1 h-1 rounded-full bg-[#A69550]"></div>
                      <div className="w-1 h-1 rounded-full bg-[#A69550]"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Detail Spotlight */}
      {selectedBadge && (
        <section ref={spotlightRef} className="py-20 md:py-40 px-4 md:px-6 flex items-center justify-center bg-gradient-to-b from-transparent via-[#D9D6CB]/50 to-transparent">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center p-6 sm:p-12 md:p-20 bg-[#F0EFEF] shadow-[0_50px_100px_-20px_rgba(67,47,57,0.15)] rounded-[2.5rem] md:rounded-[5rem] border border-[#432F39]/10 animate-fadeIn relative overflow-hidden">
            {/* Background elements for spotlight */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none hidden md:block">
              <img src={Logo} className="w-96 h-96 object-contain" alt="" />
            </div>

            <div className="flex justify-center relative transform hover:scale-105 transition-transform duration-1000">
               <div className="absolute inset-0 bg-white blur-[80px] md:blur-[100px] rounded-full scale-150 opacity-50"></div>
                <BadgeIcon
                  src={selectedBadge.icon}
                  level={selectedBadge.level}
                  size="lg"
                  locked={!selectedBadge.unlocked}
                />
            </div>
            
            <div className="space-y-6 md:space-y-10 relative z-10 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center space-x-3 mb-4 md:mb-6 bg-[#D9D6CB] px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl shadow-inner border border-[#432F39]/10">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-[#A69550] fill-[#A69550]" />
                  <span className="uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-[#432F39] text-[8px] md:text-[10px]">Tier {selectedBadge.level} Designation</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#151515] leading-[1.1] mb-3 md:mb-4">
                  Magnitude {selectedBadge.level}.0
                </h2>
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full font-bold text-[10px] md:text-xs tracking-widest uppercase flex items-center space-x-2 ${selectedBadge.unlocked ? 'bg-[#432F39] text-white' : 'bg-[#D9D6CB] text-[#432F39]'}`}>
                    {selectedBadge.rarity}
                  </div>
                  {selectedBadge.unlocked && <CheckCircle2 className="text-[#A69550] w-5 h-5 md:w-6 md:h-6" />}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h4 className="text-[9px] md:text-[10px] uppercase font-black text-[#A69550] tracking-[0.4em] md:tracking-[0.5em]">Vision & Guidelines</h4>
                <p className="text-xl md:text-2xl text-[#432F39] font-light leading-snug italic px-2 lg:px-0">
                  "{selectedBadge.description}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-10 border-t border-[#432F39]/20">
                <div className="flex items-center lg:items-start space-x-4 text-left">
                   <div className="p-2 bg-[#D9D6CB] rounded-xl flex-shrink-0"><PenTool className="w-4 h-4 md:w-5 md:h-5 text-[#A69550]" /></div>
                   <div>
                     <p className="font-bold text-[#151515] text-[10px] md:text-sm uppercase">Original Content</p>
                     <p className="text-[9px] md:text-xs text-[#432F39] opacity-70">Strictly NO AI usage. Authentic creation only.</p>
                   </div>
                </div>
                <div className="flex items-center lg:items-start space-x-4 text-left">
                   <div className="p-2 bg-[#D9D6CB] rounded-xl flex-shrink-0"><XLogo className="w-4 h-4 md:w-5 md:h-5 text-[#A69550]" /></div>
                   <div>
                     <p className="font-bold text-[#151515] text-[10px] md:text-sm uppercase">X Presence</p>
                     <p className="text-[9px] md:text-xs text-[#432F39] opacity-70">Maintain your Seismic identity consistently.</p>
                   </div>
                </div>
              </div>

              <div className="p-5 md:p-6 bg-[#432F39] rounded-[1.5rem] md:rounded-[2rem] text-white shadow-2xl border border-white/10 text-left">
                 <div className="flex items-center space-x-3 mb-2 md:mb-3">
                   <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#A69550]" />
                   <p className="font-black text-[9px] md:text-xs uppercase tracking-widest">MAGNITUDE GUIDELINE</p>
                 </div>
                 <p className="text-[11px] md:text-sm text-[#D9D6CB] opacity-90 leading-relaxed font-medium">
                   "Promotions are not automatic. If you consistently show up and contribute, the roles will come naturally. Demonstrate real effort and commitment."
                 </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Magnitude Guidelines Section */}
      <section className="py-20 md:py-40 px-4 md:px-6 bg-[#151515] text-white relative overflow-hidden">
        {/* Background visual detail */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A69550] to-transparent opacity-30"></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none hidden md:block">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({length: 24}).map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center px-4">
            <div className="inline-flex items-center justify-center space-x-3 md:space-x-4 mb-6 md:mb-8 bg-white/5 px-6 md:px-8 py-2 md:py-3 rounded-full border border-white/10">
              
              <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter">Community Guidelines</h2>
            </div>
            <p className="text-lg md:text-2xl text-[#D9D6CB] max-w-4xl mx-auto font-light tracking-wide leading-relaxed opacity-80">
              These guidelines are for all members, from Magnitude 1.0 to 9.0. We value quality, authenticity, and long term commitment over short term gains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidelines.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-6 p-3 bg-[#B9976E]/20 rounded-2xl inline-block group-hover:bg-[#B9976E]/40 transition-colors">
                  <item.icon className="w-8 h-8 text-[#B9976E]" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide group-hover:text-[#B9976E] transition-colors">{item.title}</h3>
                <p className="text-[#D9D0B4] text-sm leading-relaxed opacity-80 font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-[#B9976E]/10 border border-[#B9976E]/30 rounded-[2.5rem] text-center max-w-4xl mx-auto">
             <Heart className="w-12 h-12 text-[#B9976E] mx-auto mb-6 animate-pulse" />
             <p className="text-lg md:text-xl font-medium leading-relaxed italic text-[#D9D0B4]">
              "When someone visits your profile, we want them to immediately feel your pride and dedication to Seismic. 
              The efforts of those who truly contribute will always be rewarded more effectively."
             </p>
          </div>
        </div>
      </section>

      {/* Achievement Footer */}
      <footer className=" min-h-screen
  flex items-center
  py-12 md:py-16
  text-center
  border-t border-[#432F39]/10
  relative overflow-hidden
  bg-[#F0EFEF]/60 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-10 md:mb-14 text-center">
      {/* Logo */}
      <div className="relative flex justify-center mb-5 md:mb-6">
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full blur-2xl bg-[#D0B583] opacity-40" />
        <img
          src={Logo}
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          alt="Seismic Logo"
          draggable={false}
        />
      </div>

      {/* Tagline */}
      <p className="uppercase font-black text-[#A69550]
        tracking-[0.45em] sm:tracking-[0.6em] md:tracking-[0.8em]
        text-[9px] sm:text-[10px] md:text-[11px]">
        Magnitude Legacy
      </p>
      </div>

          
          <h2 className="text-2xl md:text-4xl font-black text-[#151515] mb-8 md:mb-10 leading-tight md:leading-none tracking-tighter">Progress defines status. Your journey is only beginning.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12 px-10 sm:px-0">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-[#151515]">09</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-[#432F39] mt-2 opacity-70">Magnitudes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-[#151515]">100%</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-[#432F39] mt-2 opacity-70">Original</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-[#151515]">∞</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-[#432F39] mt-2 opacity-70">Commitment</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8 md:space-y-10">
            {/* Social Handles Section - Premium Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl">
              <a href="https://x.com/SeismicSys" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/40 border border-[#432F39]/10 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="p-3 md:p-4 bg-[#D9D6CB] rounded-[1rem] md:rounded-[1.5rem] group-hover:bg-[#151515] transition-all duration-500 shadow-inner">
                  <XLogo className="w-6 h-6 md:w-8 md:h-8 text-[#151515] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#A69550] mb-1 md:mb-2">Connect on X</p>
                  <p className="text-sm md:text-base font-black text-[#151515]"> X </p>
                </div>
              </a>

              <a href="https://discord.gg/seismic" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/40 border border-[#432F39]/10 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="p-3 md:p-4 bg-[#D9D6CB] rounded-[1rem] md:rounded-[1.5rem] group-hover:bg-[#5865F2] transition-all duration-500 shadow-inner">
                  <DiscordLogo className="w-6 h-6 md:w-8 md:h-8 text-[#151515] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#A69550] mb-1 md:mb-2">Join Discord</p>
                  <p className="text-sm md:text-base font-black text-[#151515]">Discord</p>
                </div>
              </a>

              <a href="https://github.com/SeismicSystems" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/40 border border-[#432F39]/10 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                <div className="p-3 md:p-4 bg-[#D9D6CB] rounded-[1rem] md:rounded-[1.5rem] group-hover:bg-[#2dba4e] transition-all duration-500 shadow-inner">
                  <Github className="w-6 h-6 md:w-8 md:h-8 text-[#151515] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#A69550] mb-1 md:mb-2">Build on GitHub</p>
                  <p className="text-sm md:text-base font-black text-[#151515]">GitHub</p>
                </div>
              </a>
            </div>

            {/* Unofficial Disclaimer & Credit Section */}
            <div className="relative pt-8 md:pt-10 pb-2 border-t border-[#432F39]/10 w-full max-w-3xl">
              <div className="flex flex-col items-center space-y-4 md:space-y-6">
                <p className="text-xs md:text-lg font-black text-[#151515] tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-90 leading-relaxed max-w-2xl px-4">
                  Unofficial community made showcase<br />for the Seismic Discord
                </p>
                
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="h-[1px] w-10 md:w-16 bg-[#A69550]/20"></div>
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#A69550] animate-pulse" />
                  <div className="h-[1px] w-10 md:w-16 bg-[#A69550]/20"></div>
                </div>

                <p className="text-[9px] md:text-[11px] text-[#432F39] opacity-40 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black italic">
                  Visual Identity Powered by the Collective
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
