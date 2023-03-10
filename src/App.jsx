import { Navbar, Hero, Background, Examples, About, Footer } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className='flex justify-center items-center sm:px-16'>
      <div className='xl:max-w-[1600px] w-full'>
        <Navbar />
      </div>
    </div>
    
    <div className="bg-primary flex justify-center items-start sm:px-16 px-6">
      <div className="xl:max-w-[1600px] w-full">
          <Routes>
            <Route path="/" element ={<Hero />} />
            <Route path="/home" element ={<Hero />} />
            <Route path="/background" element ={<Background />} />
            <Route path="/examples" element ={<Examples />} />
            <Route path="/about" element ={<About />} />
          </Routes>
          <Footer />
      </div>
    </div>
  </div>
)


export default App