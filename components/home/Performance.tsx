import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { upcomingConcerts } from "@/data/concerts";



const fixedYoutubeId = "-9uLT2UaXTE";



const fixedConcerts = [
  {
    title: "雪入美優ピアノリサイタル",
    image:
      "/images/performance/archive/2025/flyer-4.jpg",
    href: "/performance",
  },

  {
    title: "若きベートーヴェン・チクルスVol.1",
    image:
      "/images/performance/archive/2024/flyer-1.jpg",
    href: "/performance",
  },
];

export default function Performance() {


  const concerts = [
    ...upcomingConcerts.slice(0, 2),
    ...fixedConcerts,
  ].slice(0, 2);



  const items = [

    ...concerts.map((concert) => ({

      title: concert.title,

      image:
        "flyer" in concert
          ? concert.flyer
          : concert.image,

      href:
        "flyer" in concert
          ? "/performance"
          : concert.href,

      type: "concert",

    })),



    {
      title: "YouTube Shorts",

      image:
        `https://img.youtube.com/vi/${fixedYoutubeId}/maxresdefault.jpg`,

      href:
        `https://www.youtube.com/shorts/${fixedYoutubeId}`,

      type: "youtube",

    },

  ];



  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">


      <SectionTitle
        title="演奏活動"
        subtitle="演奏会・出演情報・演奏動画をご紹介します。"
      />



      <div className="grid gap-2 md:gap-8 grid-cols-3">


        {items.map((item, index) => (

          <Link
            key={index}
            href={item.href}

            target={
              item.type === "youtube"
                ? "_blank"
                : undefined
            }

            rel={
              item.type === "youtube"
                ? "noopener noreferrer"
                : undefined
            }

            className="
              group
              relative
              aspect-[210/297]
              overflow-hidden
              rounded-lg
              bg-neutral-100
            "
          >


            <Image
              src={item.image}
              alt={item.title}

              width={420}
              height={594}

              className={`
                h-full
                w-full

                ${
                  item.type === "youtube"
                    ? "object-cover"
                    : "object-contain"
                }

                transition
                duration-500

                ${
                  item.type === "youtube"
                    ? "group-hover:scale-105"
                    : "group-hover:scale-[1.03]"
                }
              `}
            />



            {item.type === "youtube" && (

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/20
                  transition
                  duration-300
                  group-hover:bg-black/35
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-2xl
                    text-black
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                >
                  ▶
                </div>

              </div>

            )}



          </Link>

        ))}


      </div>



      <div className="mt-12 text-center">

        <Button href="/performance">
          演奏活動について詳しく見る
        </Button>

      </div>


    </section>
  );
}