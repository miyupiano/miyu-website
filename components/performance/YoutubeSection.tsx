"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { youtubeVideos } from "@/data/youtube";


export default function YoutubeSection() {


  const [playingVideo, setPlayingVideo] =
    useState<string | null>(null);



  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">


      <SectionTitle
        title="演奏動画"
        subtitle=""
      />

      <p className="mb-4 md:mb-12 leading-8 text-neutral-700">
        演奏の様子をYouTubeで公開しています。
        <br />
        音楽の世界をより身近に感じていただけましたら嬉しいです。
      </p>




      <div className="grid gap-6 md:grid-cols-3">


        {youtubeVideos.map((video) => (

          <div
            key={video.id}
            className="
              aspect-video
              overflow-hidden
              rounded-2xl
              bg-neutral-100
            "
          >


            {playingVideo === video.id ? (

              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            ) : (


              <button
                onClick={() =>
                  setPlayingVideo(video.id)
                }
                className="
                  group
                  relative
                  h-full
                  w-full
                  cursor-pointer
                "
              >


                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />



                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/25
                    transition
                    group-hover:bg-black/40
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-xl
                      text-black
                      transition
                      group-hover:scale-110
                    "
                  >
                    ▶
                  </div>

                </div>


              </button>

            )}

          </div>

        ))}


      </div>




      <div className="mt-6 md:mt-12 text-center">


        <Button
          href="https://www.youtube.com/@myumyu_pianolove"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTubeチャンネルを見る
        </Button>


      </div>


    </section>
  );
}