import { Navbar, Hero, Facts, Relationship, Application } from "./components";

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className='flex justify-center items-center'>
      <div className='xl:max-w-[1600px] w-full bg-purple-gradient px-5'>
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1600px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-center px-6 ">
      <div className="xl:max-w-[1600px] w-full">
        <Facts />
        <Relationship />
        <Application /> 
      </div>
    </div>
  </div>
)


export default App