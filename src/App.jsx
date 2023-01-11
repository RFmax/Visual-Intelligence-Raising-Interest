import { Navbar, Hero, Background, Examples, About } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className='flex justify-center items-center'>
      <div className='xl:max-w-[1600px] w-full bg-purple-gradient px-5 rounded-b'>
        <Navbar />
      </div>
    </div>
    
    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1600px] w-full">
          <Routes>
          </Routes>
      </div>
    </div>
  </div>
)


export default App