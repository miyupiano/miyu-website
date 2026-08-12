"use client";

import Image from "next/image";

type Concert = {
  id: number;
  title: string;
  flyer: string;
  date: string;
  venue: string;
  program?: string;
  comment?: string;
  image?: string;
};

type Props = {
  concert: Concert;
  onClose: () => void;
};

export default function ConcertModal({
  concert,
  onClose,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
      onClick={onClose}
    >

      <div
        className="
          relative
          grid
          max-h-[85vh]
          w-full
          max-w-6xl
          gap-12
          overflow-y-auto
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
          md:grid-cols-2
          md:p-12
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-5
            text-3xl
            text-neutral-400
            transition
            hover:text-black
            cursor-pointer
          "
        >
          ×
        </button>


        {/* Flyer */}

        <div className="relative mx-auto aspect-[3/4] w-full max-w-md">

          <Image
            src={concert.flyer}
            alt={concert.title}
            fill
            className="object-contain"
          />

        </div>



        {/* Detail */}

        <div className="flex flex-col justify-center">


          <h2 className="text-3xl font-light leading-relaxed">
            {concert.title}
          </h2>


          <div className="mt-8 space-y-5 text-neutral-700">


            <div>
              <p className="text-xs tracking-[0.2em] text-neutral-400">
                DATE
              </p>

              <p className="mt-1">
                {concert.date}
              </p>
            </div>


            <div>
              <p className="text-xs tracking-[0.2em] text-neutral-400">
                VENUE
              </p>

              <p className="mt-1">
                {concert.venue}
              </p>
            </div>


            {concert.program && (
              <div>
                <p className="text-xs tracking-[0.2em] text-neutral-400">
                  PROGRAM
                </p>

                <p className="mt-2 leading-8">
                  {concert.program}
                </p>
              </div>
            )}


          </div>



          {/* Photo */}

          {concert.image && (
            <div className="relative mt-10 aspect-video overflow-hidden rounded-xl">

              <Image
                src={concert.image}
                alt={concert.title}
                fill
                className="object-cover"
              />

            </div>
          )}



          {/* Comment */}

          {concert.comment && (
            <p className="mt-8 leading-8 text-neutral-600">
              {concert.comment}
            </p>
          )}


        </div>


      </div>

    </div>
  );
}