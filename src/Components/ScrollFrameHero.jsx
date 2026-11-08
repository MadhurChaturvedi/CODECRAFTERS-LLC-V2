import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ChevronRight, Sparkles, Terminal, ShieldCheck } from "lucide-react";

export default function ScrollFrameHero({ onOpenConsultation }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const TOTAL_FRAMES = 240;
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animationFrameIdRef = useRef(null);
  const lastDrawnFrameRef = useRef(null);

  // 1. Preload frame images
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES + 1);

    // Helper to load a single frame
    const loadFrame = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        const paddedIndex = String(index).padStart(4, "0");
        img.src = `/frames/frame_${paddedIndex}.jpg`;
        img.onload = () => {
          imagesRef.current[index] = img;
          setLoadedCount((prev) => prev + 1);
          resolve(img);
        };
        img.onerror = () => {
          resolve(null);
        };
      });
    };

    // Load initial 30 frames eagerly so first frame renders immediately
    const loadInitialBatch = async () => {
      const initialBatch = [];
      for (let i = 1; i <= Math.min(30, TOTAL_FRAMES); i++) {
        initialBatch.push(loadFrame(i));
      }
      await Promise.all(initialBatch);
      setIsReady(true);

      // Render the very first frame immediately once loaded
      if (canvasRef.current && imagesRef.current[1]) {
        drawFrameToCanvas(imagesRef.current[1]);
      }

      // Progressively load remaining frames
      for (let i = 31; i <= TOTAL_FRAMES; i++) {
        loadFrame(i);
      }
    };

    loadInitialBatch();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // 2. Draw image to canvas using object-fit: cover scaling
  const drawFrameToCanvas = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || img.width || 1280;
    const imgHeight = img.naturalHeight || img.height || 720;

    const hRatio = canvasWidth / imgWidth;
    const vRatio = canvasHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const shiftX = (canvasWidth - imgWidth * ratio) / 2;
    const shiftY = (canvasHeight - imgHeight * ratio) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(
      img,
      0,
      0,
      imgWidth,
      imgHeight,
      shiftX,
      shiftY,
      imgWidth * ratio,
      imgHeight * ratio
    );
  };

  // 3. Handle window resizing to keep canvas sharp
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Re-draw current frame
      const frameToDraw =
        imagesRef.current[Math.round(currentFrameRef.current)] ||
        imagesRef.current[lastDrawnFrameRef.current] ||
        imagesRef.current[1];
      if (frameToDraw) {
        drawFrameToCanvas(frameToDraw);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady]);

  // 4. Scroll tracking & Smooth animation loop
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress between 0 and 1
      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      setScrollProgress(progress);

      // Map progress to frame index (1 to TOTAL_FRAMES)
      const mappedFrame = 1 + progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = Math.min(TOTAL_FRAMES, Math.max(1, mappedFrame));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Smooth RAF animation loop for frame transitions
    const renderLoop = () => {
      // Lerp current frame towards target frame for buttery smoothness
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.25;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameIndex = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(currentFrameRef.current))
      );

      // Find image or fallback to nearest loaded
      let img = imagesRef.current[frameIndex];
      if (!img || !img.complete) {
        // Fallback to last successfully drawn frame or frame 1
        img = imagesRef.current[lastDrawnFrameRef.current] || imagesRef.current[1];
      }

      if (img && img !== lastDrawnFrameRef.current) {
        drawFrameToCanvas(img);
        lastDrawnFrameRef.current = img;
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isReady]);

  // Compute opacity layers for the 3 sequential narrative phases
  // Phase 1 (0.0 to 0.32): Hero introduction
  const phase1Opacity = Math.max(0, Math.min(1, (0.28 - scrollProgress) / 0.28));
  // Phase 2 (0.32 to 0.68): Warp speed / CI/CD acceleration
  const phase2Opacity =
    scrollProgress < 0.32
      ? 0
      : scrollProgress < 0.45
      ? (scrollProgress - 0.32) / 0.13
      : scrollProgress < 0.58
      ? 1
      : Math.max(0, (0.68 - scrollProgress) / 0.10);
  // Phase 3 (0.70 to 1.0): Culmination into architecture & telemetry
  const phase3Opacity =
    scrollProgress < 0.68
      ? 0
      : Math.min(1, (scrollProgress - 0.68) / 0.15);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-black">
      {/* Sticky Fullscreen Frame Player */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* HTML5 Canvas scrubbing through the 240 frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Cinematic Vignette Masks for Pure Black Bleed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/80 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />

        {/* Progressive Loading Pill (only visible during first second if loading) */}
        {!isReady && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[12px] text-white flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-ping" />
            <span>Initializing interactive timeline ({loadedCount}/{TOTAL_FRAMES})...</span>
          </div>
        )}

        {/* NARRATIVE PHASE 1: Hero Main Typography (0% - 30% scroll) */}
        <div
          style={{
            opacity: phase1Opacity,
            pointerEvents: phase1Opacity > 0.1 ? "auto" : "none",
            transform: `translateY(${-scrollProgress * 60}px)`,
          }}
          className="relative z-20 max-w-[1024px] mx-auto text-center px-4 sm:px-6 transition-all duration-150"
        >
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[12px] font-medium text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-pulse" />
            <span className="tracking-wide uppercase font-semibold">CodeCrafters LLC</span>
            <span className="text-white/40">•</span>
            <span className="text-[#2997ff]">Hillsborough, New Jersey</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-[38px] sm:text-[54px] lg:text-[64px] font-semibold text-white leading-[1.05] tracking-[-0.32px] max-w-4xl mx-auto mb-5 drop-shadow-lg">
            Engineering the Next Generation of Intelligent Software Systems.
          </h1>

          {/* Subtitle */}
          <p className="text-[20px] sm:text-[26px] text-white/90 font-normal leading-[1.2] tracking-[0.196px] max-w-3xl mx-auto mb-6">
            Custom Web Platforms. Scalable Cloud. Enterprise AI.
          </p>

          {/* Specialization Line */}
          <div className="h-8 flex items-center justify-center text-[15px] sm:text-[18px] text-white/70 mb-10 font-mono">
            <span className="mr-2">Focus:</span>
            <TypeAnimation
              sequence={[
                "Zero-Latency Microservices",
                2000,
                "Multi-Region Kubernetes Deployments",
                2000,
                "Autonomous AI & RAG Pipelines",
                2000,
                "Mission-Critical Enterprise Systems",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#2997ff] font-semibold"
            />
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary shadow-2xl shadow-blue-900/40"
            >
              Start Your Project
            </button>
            <Link
              to="/services"
              className="apple-btn-secondary"
            >
              Explore Capabilities
            </Link>
          </div>

          {/* Scroll Cue */}
          <div className="flex items-center justify-center space-x-2 text-[12px] text-white/60 font-mono animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>Scroll slowly to initiate architecture flight</span>
          </div>
        </div>

        {/* NARRATIVE PHASE 2: Mid-Warp Architecture Callout (35% - 65% scroll) */}
        <div
          style={{
            opacity: phase2Opacity,
            pointerEvents: phase2Opacity > 0.1 ? "auto" : "none",
            transform: `scale(${0.95 + phase2Opacity * 0.05})`,
          }}
          className="absolute z-20 max-w-[800px] mx-auto text-center px-6 transition-all duration-150"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0066cc]/20 border border-[#2997ff]/40 text-[#2997ff] text-[12px] font-mono font-medium mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>LIVE CLOUD CONDUIT • CONTINUOUS DELIVERY</span>
          </div>

          <h2 className="text-[34px] sm:text-[48px] font-semibold text-white leading-[1.08] tracking-tight mb-4 drop-shadow-xl">
            Accelerate Past Technical Debt.
          </h2>

          <p className="text-[17px] sm:text-[20px] text-[#cccccc] max-w-xl mx-auto leading-relaxed mb-6">
            Automated CI/CD pipelines, containerized Kubernetes microservices, and sub-15ms edge caching designed to scale without friction.
          </p>

          <div className="inline-flex items-center space-x-4 p-3 px-5 rounded-full bg-black/60 border border-white/15 backdrop-blur-lg text-[13px] text-white font-mono">
            <span className="text-[#27c93f]">● 14-Day Sprint Cadence</span>
            <span className="text-white/30">|</span>
            <span className="text-[#2997ff]">● 99.999% SLA Uptime</span>
            <span className="text-white/30">|</span>
            <span className="text-[#ffbd2e]">● Zero Lock-in</span>
          </div>
        </div>

        {/* NARRATIVE PHASE 3: Arrival into Telemetry & Systems (70% - 100% scroll) */}
        <div
          style={{
            opacity: phase3Opacity,
            pointerEvents: phase3Opacity > 0.1 ? "auto" : "none",
            transform: `translateY(${(1 - phase3Opacity) * 30}px)`,
          }}
          className="absolute z-20 max-w-[860px] mx-auto text-center px-6 transition-all duration-150"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[12px] text-[#2997ff] font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Target Reached • Production Verified</span>
          </div>

          <h2 className="text-[36px] sm:text-[50px] font-semibold text-white leading-[1.08] tracking-tight mb-4">
            Production Software, Mastered.
          </h2>

          <p className="text-[17px] sm:text-[20px] text-[#a1a1a6] max-w-xl mx-auto mb-8">
            Scroll further to inspect our live cluster telemetry, client case studies, and engineering services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary !py-[12px] !px-[24px]"
            >
              Schedule Discovery Call
            </button>
            <Link
              to="/services"
              className="apple-btn-secondary !py-[12px] !px-[24px]"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Micro-Progress Pill Tracker */}
        <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-[#86868b]">
          <span>FRAME</span>
          <span className="text-[#2997ff] font-bold">
            {String(Math.round(1 + scrollProgress * (TOTAL_FRAMES - 1))).padStart(3, "0")}
          </span>
          <span>/</span>
          <span>{TOTAL_FRAMES}</span>
        </div>
      </div>
    </section>
  );
}

