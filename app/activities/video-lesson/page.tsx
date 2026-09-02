import Hero from "@/components/activities/video-lesson/Hero";
import Concerns from "@/components/activities/video-lesson/Concerns";
import About from "@/components/activities/video-lesson/About";
import Target from "@/components/activities/video-lesson/Target";
import Points from "@/components/activities/video-lesson/Points";
import Feedback from "@/components/activities/video-lesson/Feedback";
import Flow from "@/components/activities/video-lesson/Flow";
import HowToSend from "@/components/activities/video-lesson/HowToSend";
import Pricing from "@/components/activities/video-lesson/Pricing";
import Profile from "@/components/activities/video-lesson/Profile";
import FAQ from "@/components/activities/video-lesson/FAQ";
import CTA from "@/components/activities/video-lesson/CTA";

export default function VideoLessonPage() {
  return (
    <main>
      <Hero />
      {/* <Concerns /> */}
      <About />
      <Target />
      <Points />
      {/* <Feedback /> */}
      <Flow />
      <HowToSend />
      <Pricing />
      <Profile />
      <FAQ />
      <CTA />
    </main>
  );
}