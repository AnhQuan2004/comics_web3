/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';

interface LandingPageProps {
    onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark font-mono overflow-x-hidden selection:bg-neon-pink selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="min-h-screen flex flex-col items-center justify-center relative border-b-8 border-brand-dark overflow-hidden">
                {/* Background Noise/Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-neon-lime border-4 border-brand-dark shadow-hard animate-float-1 hidden md:block rotate-12"></div>
                <div className="absolute bottom-40 right-20 w-48 h-48 bg-neon-purple border-4 border-brand-dark shadow-hard-pink animate-float-2 hidden md:block -rotate-6 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brutal-red border-4 border-brand-dark shadow-hard-sm animate-bounce-fast hidden lg:block rounded-none rotate-45"></div>

                {/* Main Title */}
                <div className="relative z-10 text-center mix-blend-hard-light">
                    <h1 className="font-display text-[15vw] leading-[0.8] text-brand-dark drop-shadow-[8px_8px_0px_rgba(255,0,255,1)] hover:scale-105 transition-transform duration-300 cursor-default">
                        COMICS
                    </h1>
                    <h1 className="font-display text-[15vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-lime to-neon-pink drop-shadow-[8px_8px_0px_#111] hover:-rotate-2 transition-transform duration-300 cursor-default">
                        THREE
                    </h1>
                </div>

                <p className="mt-8 font-bold text-xl md:text-3xl bg-white border-4 border-brand-dark shadow-hard px-6 py-2 rotate-2 animate-pulse-fast">
                    THE NEXT GENERATION OF STORYTELLING
                </p>

                <button
                    onClick={onEnter}
                    className="mt-16 group relative inline-flex items-center justify-center px-12 py-6 text-3xl font-display font-bold text-white transition-all duration-200 bg-brand-dark border-4 border-brand-dark focus:outline-none focus:ring-4 focus:ring-neon-lime focus:ring-offset-4 hover:bg-neon-pink hover:text-brand-dark hover:shadow-hard-lime hover:-translate-y-2 active:translate-y-0 active:shadow-none"
                >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">CREATE COMICS NOW</span>
                    <svg className="w-8 h-8 ml-4 transition-transform duration-200 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>

                <div className="absolute bottom-0 w-full bg-neon-yellow border-t-4 border-brand-dark py-2 overflow-hidden whitespace-nowrap">
                    <div className="animate-marquee inline-block">
                        <span className="text-4xl font-display mx-8">★ AI POWERED</span>
                        <span className="text-4xl font-display mx-8">★ INFINITE STORIES</span>
                        <span className="text-4xl font-display mx-8">★ SUI BLOCKCHAIN</span>
                        <span className="text-4xl font-display mx-8">★ NEOBRUTALISM</span>
                        <span className="text-4xl font-display mx-8">★ CREATE. SHARE. OWN.</span>
                        <span className="text-4xl font-display mx-8">★ AI POWERED</span>
                        <span className="text-4xl font-display mx-8">★ INFINITE STORIES</span>
                        <span className="text-4xl font-display mx-8">★ SUI BLOCKCHAIN</span>
                    </div>
                </div>
            </section>

            {/* --- FEATURES SECTION --- */}
            <section className="py-24 px-4 md:px-10 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-display mb-16 text-center scroll-reveal">
                        <span className="bg-neon-lime px-4 shadow-hard border-4 border-brand-dark">WHY IT ROCKS</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="scroll-reveal bg-brand-bg border-4 border-brand-dark shadow-hard-xl p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 group">
                            <div className="w-16 h-16 bg-neon-pink border-4 border-brand-dark mb-6 flex items-center justify-center text-3xl font-bold group-hover:rotate-12 transition-transform">01</div>
                            <h3 className="text-3xl font-display mb-4">INFINITE PLOTS</h3>
                            <p className="text-lg leading-relaxed">
                                Powered by Gemini 1.5 Pro. Never read the same story twice. The multiverse is literally at your fingertips.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="scroll-reveal bg-neon-blue border-4 border-brand-dark shadow-hard-xl p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 group" style={{ transitionDelay: '100ms' }}>
                            <div className="w-16 h-16 bg-white border-4 border-brand-dark mb-6 flex items-center justify-center text-3xl font-bold group-hover:-rotate-12 transition-transform">02</div>
                            <h3 className="text-3xl font-display mb-4">SUI INTEGRATION</h3>
                            <p className="text-lg leading-relaxed">
                                Connect your Sui Wallet. Verify your assets. Own your generations. The future of comics is decentralized.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="scroll-reveal bg-brand-bg border-4 border-brand-dark shadow-hard-xl p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 group" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-16 bg-neon-yellow border-4 border-brand-dark mb-6 flex items-center justify-center text-3xl font-bold group-hover:rotate-180 transition-transform">03</div>
                            <h3 className="text-3xl font-display mb-4">PURE CHAOS</h3>
                            <p className="text-lg leading-relaxed">
                                Neobrutalist design meets advanced AI. It's loud, it's bold, and it's exactly what you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GALLERY / MARQUEE REVERSE --- */}
            <section className="py-12 bg-brand-dark overflow-hidden border-y-8 border-neon-pink">
                <div className="animate-marquee-reverse whitespace-nowrap">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="inline-block mx-4 w-64 h-64 bg-gray-800 border-4 border-white shadow-[8px_8px_0px_#CCFF00] relative group cursor-pointer hover:scale-105 transition-transform">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-display text-2xl opacity-50 group-hover:opacity-100">
                                COMIC #{i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-32 px-4 bg-neon-lime flex flex-col items-center justify-center text-center border-b-8 border-brand-dark">
                <h2 className="text-5xl md:text-7xl font-display mb-8 max-w-4xl leading-tight">
                    READY TO ENTER THE <span className="text-white text-stroke-black">MULTIVERSE?</span>
                </h2>
                <button
                    onClick={onEnter}
                    className="text-2xl md:text-4xl font-bold bg-white border-4 border-brand-dark px-12 py-6 shadow-hard hover:bg-brand-dark hover:text-white hover:shadow-hard-pink transition-all hover:-rotate-2"
                >
                    START GENERATING &rarr;
                </button>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-brand-dark text-white py-12 px-8 border-t-8 border-neon-blue font-mono text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-display text-neon-pink mb-2">COMICS_THREE</h4>
                        <p className="text-gray-400">© 2025. All rights reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-neon-lime hover:underline">TWITTER</a>
                        <a href="#" className="hover:text-neon-lime hover:underline">DISCORD</a>
                        <a href="#" className="hover:text-neon-lime hover:underline">GITHUB</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};
