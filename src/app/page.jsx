import Button from "@/components/ui/Button"
import Main from "@/components/ui/Main"
import Section from "@/components/ui/Section"


const Home = () => {
  return (
    <>
      <Main className={"mt-24"}>
        <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md mt-10 mb-6">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <p className="font-main font-light text-dark/80 text-sm">
            The everyday planner
          </p>
        </div>
        <h1 className="font-main font-black text-center text-dark/90 text-3xl lg:text-6xl">
          Designed for your day. <br /> Built for your flow.
        </h1>
        <p className="text-center text-xs text-dark/60 mt-4 mb-8 lg:text-sm lg:w-1/2">
          Luno helps you manage your daily tasks, track personal goals, and
          organize priorities with a simple, calming interface that fits right
          into your everyday routine whether you're planning solo or guiding a
          small, focused team.
        </p>
        <div className="flex gap-2">
          <Button className={"border border-primary"}>Get Started</Button>
          <Button
            className={
              "border border-primary bg-transparent text-primary hover:text-white"
            }
          >
            For Teams
          </Button>
        </div>
      </Main>
    </>
  );
}

export default Home