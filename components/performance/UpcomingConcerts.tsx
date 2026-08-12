"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { upcomingConcerts } from "@/data/concerts";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import ConcertApplyModal from "./ConcertApplyModal";


export default function UpcomingConcerts() {

  const galleryRef =
    useRef<HTMLDivElement>(null);


  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedConcert, setSelectedConcert] =
    useState<
      (typeof upcomingConcerts)[number] | null
    >(null);

  const hasMultiple =
    upcomingConcerts.length > 1;



  const handleApply = (
    concert: (typeof upcomingConcerts)[number]
  ) => {

    if (concert.applicationUrl) {

      window.open(
        concert.applicationUrl,
        "_blank"
      );

      return;

    }


    setSelectedConcert(concert);

  };



  const handleFlyerDownload = (
    flyerPdf?: string
  ) => {

    if (!flyerPdf) {

      window.alert(
        "チラシデータがありません。"
      );

      return;

    }


    const confirmDownload =
      window.confirm(
        "このチラシを保存しますか？"
      );


    if (confirmDownload) {

      const link =
        document.createElement("a");

      link.href = flyerPdf;
      link.download = "";

      link.click();

    }

  };



  const updateIndex = () => {

    const element =
      galleryRef.current;


    if (!element) return;


    const index =
      Math.round(
        element.scrollLeft /
        element.clientWidth
      );


    setCurrentIndex(index);

  };



  const scrollToConcert = (
    index: number
  ) => {

    const element =
      galleryRef.current;


    if (!element) return;


    element.scrollTo({

      left:
        index *
        element.clientWidth,

      behavior: "smooth",

    });

  };

  return (
  <section className="mx-auto max-w-6xl px-8 pt-12 md:pt-26">


    <SectionTitle
      title="今後の演奏会"
      subtitle=""
    />



    <div className="relative mt-10 px-0 md:px-16">



      {/* Left Button */}

      {hasMultiple &&
        currentIndex > 0 && (

        <button
          type="button"
          onClick={() =>
            scrollToConcert(
              currentIndex - 1
            )
          }
          className="
            absolute
            left-4
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            cursor-pointer
            text-2xl
            font-light
            text-neutral-400
            md:block
            transition
            duration-300
            hover:text-black
            hover:-translate-x-1
          "
        >
          《
        </button>

      )}





      {/* Gallery */}

      <div
        ref={galleryRef}
        onScroll={updateIndex}
        className="
          flex
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          scrollbar-hide
        "
      >


        {upcomingConcerts.map((concert) => (

          <article
            key={concert.id}
            className="
              min-w-full
              snap-center
            "
          >


            <div
              className="
                grid
                max-w-5xl
                gap-10
                md:grid-cols-[380px_1fr]
                md:gap-14
                md:items-stretch
              "
            >



              {/* Flyer */}

              <div
                className="
                  mx-auto
                  w-full
                  max-w-[280px]
                  md:max-w-sm
                "
              >

                {/* Mobile Number */}

                {hasMultiple && (
                  <p
                    className="
                      mb-1
                      text-center
                      text-sm
                      text-neutral-500
                      md:hidden
                    "
                  >
                    {currentIndex + 1} / {upcomingConcerts.length}
                  </p>
                )}



                {/* Flyer Area */}

                <div
                  className="
                    relative
                  "
                >


                  {/* Left Button Mobile */}

                  {hasMultiple &&
                    currentIndex > 0 && (

                    <button
                      type="button"
                      onClick={() =>
                        scrollToConcert(
                          currentIndex - 1
                        )
                      }
                      className="
                        absolute
                        -left-8
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-2xl
                        font-light
                        text-neutral-400
                        md:hidden
                      "
                    >
                      《
                    </button>

                  )}



                  {/* Flyer Image */}

                  <button
                    type="button"
                    onClick={() =>
                      handleFlyerDownload(
                        concert.flyerPdf
                      )
                    }
                    className="
                      group
                      block
                      w-full
                      cursor-pointer
                      text-left
                    "
                  >

                    <div
                      className="
                        overflow-hidden
                      "
                    >

                      <Image
                        src={concert.flyer}
                        alt={concert.title}
                        width={800}
                        height={1200}
                        className="
                          h-auto
                          w-full
                          transition
                          duration-300
                          group-hover:scale-105
                          group-hover:opacity-80
                        "
                      />

                    </div>

                  </button>



                  {/* Right Button Mobile */}

                  {hasMultiple &&
                    currentIndex < upcomingConcerts.length - 1 && (

                    <button
                      type="button"
                      onClick={() =>
                        scrollToConcert(
                          currentIndex + 1
                        )
                      }
                      className="
                        absolute
                        -right-8
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-2xl
                        font-light
                        text-neutral-400
                        md:hidden
                      "
                    >
                      》
                    </button>

                  )}

                </div>


              </div>

              {/* Information */}


              <div
                className="
                  flex
                  h-full
                  flex-col
                "
              >


                <h3
                  className="
                    text-[19px]
                    font-left
                    leading-tight
                    md:text-[26px]
                    md:leading-relaxed
                    whitespace-pre-line
                    text-center
                  "
                >
                  {concert.title}
                </h3>

                <div
                  className="
                    mt-6
                    space-y-4
                    md:space-y-5
                    text-neutral-700
                  "
                >



                  <div>

                    <p
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      DATE
                    </p>

                    <p className="mt-1">

                      {concert.date}

                      {concert.time && (
                        <>
                          <br />
                          {concert.time}
                        </>
                      )}

                    </p>

                  </div>





                  <div>

                    <p
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      VENUE
                    </p>

                    <p className="mt-1">
                      {concert.venue}
                    </p>

                  </div>





                  {concert.address && (

                    <div>

                      <p
                        className="
                          text-xs
                          tracking-[0.2em]
                          text-neutral-400
                        "
                      >
                        ADDRESS
                      </p>

                      <p className="mt-1">
                        {concert.address}
                      </p>

                    </div>

                  )}





                  <div>

                    <p
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      PRICE
                    </p>

                    <p className="mt-1 whitespace-pre-line">
                      {concert.price}
                    </p>

                  </div>


                </div>





                <div
                  className="
                    mt-auto
                    pt-6
                    md:pt-10
                    text-center
                  "
                >

                  <Button
                    onClick={() =>
                      handleApply(concert)
                    }
                  >
                    お申し込み
                  </Button>

                </div>



              </div>


            </div>


          </article>

        ))}


      </div>


        {/* Right Button */}

        {hasMultiple &&
          currentIndex < upcomingConcerts.length - 1 && (

          <button
            type="button"
            onClick={() =>
              scrollToConcert(
                currentIndex + 1
              )
            }
            className="
              absolute
              right-4
              top-1/2
              z-10
              hidden
              -translate-y-1/2
              cursor-pointer
              text-2xl
              font-light
              text-neutral-400
              md:block
              transition
              duration-300
              hover:text-black
              hover:translate-x-1
            "
          >
            》
          </button>

        )}


      </div>




      {/* Pagination */}

      {hasMultiple && (

        <>

          {/* Slider Bar */}

          <div
            className="
              mt-4
              md:mt-8
              flex
              justify-center
              gap-3
            "
          >

            {upcomingConcerts.map(
              (item, index) => (

              <button
                key={item.id}
                type="button"
                onClick={() =>
                  scrollToConcert(index)
                }
                className={`
                  h-[2px]
                  w-8
                  cursor-pointer
                  transition
                  duration-300
                  ${
                    currentIndex === index
                      ? "bg-black"
                      : "bg-neutral-300"
                  }
                `}
                aria-label={`${index + 1}番目の演奏会`}
              />

            ))}

          </div>



          {/* PC Number */}

          <p
            className="
              mt-2
              hidden
              text-center
              text-sm
              tracking-[0.15em]
              text-neutral-500
              md:block
            "
          >
            {currentIndex + 1} / {upcomingConcerts.length}
          </p>


        </>

      )}

      {selectedConcert && (

        <ConcertApplyModal
          concert={selectedConcert}
          onClose={() =>
            setSelectedConcert(null)
          }
        />

      )}

    </section>
  );

}