"use client";

export default function Hero() {

  const scrollToMessage = () => {
    const target = document.getElementById("message");

    if (!target) return;

    const start = window.scrollY;
    const SCROLL_OFFSET = 40;

    const end =
      target.getBoundingClientRect().top +
      start -
      SCROLL_OFFSET;

    const duration = 1300;

    const startTime = performance.now();


    const animate = (currentTime: number) => {

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );


      // 線形スクロール
      window.scrollTo({
        top: start + (end - start) * progress,
      });


      if (progress < 1) {
        requestAnimationFrame(animate);
      }

    };


    requestAnimationFrame(animate);

  };


  return (
    <section className="relative h-dvh">


      {/* PC Video */}
      <video
        src="/videos/home/hero-video-pc.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />


      {/* Mobile Video */}
      <video
        src="/videos/home/hero-video-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
      />


      {/* Overlay PC */}
      <div className="absolute inset-0 hidden bg-black/45 md:block" />


      {/* Overlay Mobile */}
      <div className="absolute inset-0 block bg-black/75 md:hidden" />


      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="px-8 text-center text-white">


          <p className="mb-6 text-sm uppercase tracking-[0.6em] md:text-lg">
            Pianist
          </p>


          <h1 className="text-5xl font-extralight tracking-[0.18em] md:text-8xl">
            MIYU YUKIIRI
          </h1>


          <p className="mt-10 text-lg font-light md:tracking-[0.6em] md:text-xl">
            音が、心に静かに寄り添う時間を。
          </p>


        </div>

      </div>



      {/* Scroll */}
      <button
        type="button"
        onClick={scrollToMessage}
        aria-label="下へスクロール"
        className="
          absolute
          bottom-12
          cursor-pointer
          left-1/2
          -translate-x-1/2
          text-white
          transition-opacity
          hover:opacity-70
        "
      >

        <div className="flex flex-col items-center">


          <span className="mb-3 text-[10px] tracking-[0.5em]">
            SCROLL
          </span>


          <span className="animate-bounce text-xl font-light">
            ↓
          </span>


        </div>
      </button>


    </section>
  );
}