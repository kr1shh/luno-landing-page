import TestimonialCarousel from "@/components/TestimonialCarousel";
import Button from "@/components/ui/Button";
import IndicationTItle from "@/components/ui/IndicationTItle";
import Main from "@/components/ui/Main";
import Section from "@/components/ui/Section";
import { BellRing, CheckCheck, SunMoon, UsersRound } from "lucide-react";
import Image from "next/image";


export const metadata = {
  title: "Luno - The Everyday Planner",
  description: "Luno helps you manage daily tasks, track personal goals, and organize priorities with a simple interface for individuals and small teams.",
  keywords: "task planner, daily planner, team organization, productivity app, Luno",
  openGraph: {
    title: "Luno - The Everyday Planner",
    description: "Manage tasks, track goals, and organize priorities with our simple, calming interface.",
    type: "website",
    images: ["/public/images/black-logo.png"],
  },
  alternates: {
    canonical: "https://luno.ai",
  }
}

const Home = () => {
  return (
    <>
      <Main className={"mt-24 overflow-hidden relative"}>
        <IndicationTItle>THE EVERYDAY PLANNER</IndicationTItle>
        <h1 className="font-main font-black text-center text-dark/90 text-3xl lg:text-6xl">
          Designed for your day. <br /> Built for your flow.
        </h1>
        <p className="text-center text-xs text-dark/60 mt-4 mb-8 sm:w-2/3 lg:text-sm lg:w-1/2">
          Luno helps you manage your daily tasks, track personal goals, and
          organize priorities with a simple, calming interface that fits right
          into your everyday routine whether you're planning solo or guiding a
          small, focused team.
        </p>
        <div className="flex gap-2">
          <Button className={"border border-primary"}>Get Started</Button>
          <button
            className={
              "border border-primary bg-transparent text-primary hover:text-blue-500 hover:bg-transparent rounded-full py-3 px-4"
            }
            aria-label="Learn about Luno for Teams"
          >
            For Teams
          </button>
        </div>
      </Main>
      <Section className={"mt-12"}>
        <div className="relative w-full h-52 sm:w-[600px] sm:h-[350px] lg:w-8/12 lg:h-[400px] xl:h-[500px] overflow-hidden rounded-xl shadow-lg flex items-center justify-center">
          <Image
            src="/images/dashboard-ui.jpg"
            alt="Luno task management dashboard interface"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </Section>
      <Section className={"mt-10"}>
        <IndicationTItle>KEY BENEFITS</IndicationTItle>
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="font-main text-dark/90 text-center text-2xl lg:text-4xl font-bold">
            What Makes Luno <br /> Work for You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              {
                title: "Simple & Clean Task Lists",
                icon: CheckCheck,
                description: "Organize tasks with our intuitive list system"
              },
              {
                title: "Smart Daily Reminders",
                icon: BellRing,
                description: "Never miss important deadlines with smart notifications"
              },
              {
                title: "Light & Dark Mode",
                icon: SunMoon,
                description: "Customize your experience for comfort in any lighting"
              },
              {
                title: "Collaborate with Team",
                icon: UsersRound,
                description: "Seamlessly work together with team members"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full rounded-xl bg-white shadow-md min-h-[200px] sm:min-w-[200px] flex flex-col items-center justify-center gap-5 p-4 border border-transparent hover:border-primary/30 transition-all duration-300 ease-in-out"
              >
                <item.icon className="w-10 h-10 text-primary" aria-hidden="true" />
                <h3 className="text-dark/80 font-main text-center text-base w-2/3">
                  {item.title}
                </h3>
                <span className="sr-only">{item.description}</span>
              </div>
            ))}
          </div>
          <Button className={"mt-6 py-3"}>Try for Free</Button>
        </div>
      </Section>
      <Section className={"mt-10"}>
        <IndicationTItle>TESTIMONIALS</IndicationTItle>
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="font-main text-dark/90 text-center text-2xl lg:text-4xl font-bold">
            Real experiences from <br/> people using Luno every day.
          </h2>
          <TestimonialCarousel/>
        </div>
      </Section>
    </>
  );
};

export default Home;