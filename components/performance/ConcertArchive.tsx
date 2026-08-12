"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { pastConcerts } from "@/data/concerts";
import ConcertModal from "./ConcertModal";
import SectionTitle from "@/components/common/SectionTitle";

export default function ConcertArchive() {
  const years = Object.keys(pastConcerts).sort(
    (a, b) => Number(b) - Number(a)
  );

  const [selectedYear, setSelectedYear] = useState(years[0]);

  const [selectedConcert, setSelectedConcert] = useState<
    (typeof pastConcerts)[keyof typeof pastConcerts][number] | null
  >(null);


  const galleryRef = useRef<HTMLDivElement>(null);


  const [leftFadeOpacity, setLeftFadeOpacity] = useState(0);
  const [rightFadeOpacity, setRightFadeOpacity] = useState(1);



  const updateFade = () => {

    const element = galleryRef.current;

    if (!element) return;


    const maxScroll =
      element.scrollWidth - element.clientWidth;


    const scrollLeft = element.scrollLeft;


    const fadeDistance = 100;


    setLeftFadeOpacity(
      Math.min(scrollLeft / fadeDistance, 1)
    );


    setRightFadeOpacity(
      Math.min(
        (maxScroll - scrollLeft) / fadeDistance,
        1
      )
    );

  };



  useEffect(() => {

    requestAnimationFrame(() => {

      const element = galleryRef.current;

      if (element) {
        element.scrollLeft = 0;
      }

      updateFade();

    });

  }, [selectedYear]);



  const concerts =
    pastConcerts[selectedYear as keyof typeof pastConcerts];



  return (
    <section className="mx-auto max-w-6xl px-8 pt-26 pb-20">


      <SectionTitle
        title="演奏会アーカイブ"
        subtitle=""
      />

      <p className="mb-4 md:mb-12 leading-8 text-neutral-700">
        過去の演奏会の様子をまとめています。
      </p>

      {/* Year Tabs */}

      <div className="mb-2 flex gap-3">

        {years.map((year) => (

          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`
              relative
              cursor-pointer
              pb-3
              text-sm
              tracking-[0.15em]
              transition
              ${
                selectedYear === year
                  ? `
                    text-black
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[2px]
                    after:w-full
                    after:bg-black
                  `
                  : `
                    text-neutral-400
                    hover:text-black
                  `
              }
            `}
          >
            {year}
          </button>

        ))}

      </div>




      {/* Gallery */}

      <div className="relative">


        <div
          ref={galleryRef}
          onScroll={updateFade}
          className="
            flex
            gap-2
            md:gap-8
            overflow-x-auto
            pb-6
            scrollbar-hide
          "
        >

          {concerts.map((concert) => (

            <button
              key={concert.id}
              onClick={() => setSelectedConcert(concert)}
              className="
                group
                min-w-[250px]
                cursor-pointer
                text-left
              "
            >


              <div
                className="
                  relative
                  aspect-[3/4]
                  transition
                  duration-300
                  group-hover:-translate-y-2
                  group-hover:shadow-xl
                "
              >

                <Image
                  src={concert.flyer}
                  alt={concert.title}
                  fill
                  className="
                    object-contain
                    transition
                    duration-300
                    group-hover:scale-[1.03]
                  "
                />

              </div>



              <p className="mt-5 text-sm text-center">
                {concert.title}
              </p>


            </button>

          ))}


        </div>




        {/* Left Fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-full
            w-10
            bg-gradient-to-r
            from-black/20
            to-transparent
          "
          style={{
            opacity: leftFadeOpacity,
          }}
        />




        {/* Right Fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-full
            w-10
            bg-gradient-to-l
            from-black/20
            to-transparent
          "
          style={{
            opacity: rightFadeOpacity,
          }}
        />


      </div>




      {/* Modal */}

      {selectedConcert && (

        <ConcertModal
          concert={selectedConcert}
          onClose={() => setSelectedConcert(null)}
        />

      )}


    </section>
  );
}