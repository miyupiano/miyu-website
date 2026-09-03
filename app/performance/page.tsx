import Image from "next/image";

import UpcomingConcerts from "@/components/performance/UpcomingConcerts";
import YoutubeSection from "@/components/performance/YoutubeSection";
import ConcertArchive from "@/components/performance/ConcertArchive";
import SupportBanner from "@/components/common/SupportBanner";


export default function PerformancePage() {
  return (
    <main>


      {/* Hero */}

      <section className="relative h-[27vh] md:h-[40vh]">


        <Image
          src="/images/performance/hero.jpg"
          alt="演奏活動"
          fill
          priority
          className="object-cover"
        />


        {/* Overlay */}

        <div className="absolute inset-0 bg-black/50" />



        {/* Text */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">


            <h1 className="pt-12 text-4xl md:text-6xl font-extralight tracking-[0.15em]">
              演奏活動
            </h1>


          </div>

        </div>


      </section>



      {/* Upcoming Concerts */}

      <UpcomingConcerts />



      {/* Video */}

      <YoutubeSection />



      {/* Archive */}

      <ConcertArchive />

      <SupportBanner />


    </main>
  );
}