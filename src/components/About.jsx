import React from 'react';
import { ImLocation2, ImMail4 } from 'react-icons/im';
import { program_visualisation } from '../assets';

const About = () => (
    <section className='flex flex-col'>
      <div className='flex flex-row items-center justify-evenly py-6'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-montserrat font-semibold text-[40px] text-center leading-normal py-6'>Information On The Minor 
          <br /> <span className='text-gradient'>Visual Intelligence</span> </h2>
          <p className='font-montserrat font-normal text-[16px] leading-normal max-w-[1000px] text-justify'>
          Within the ZUYD University of Applied Sciences there is a possibility to apply for a minor in Visual Intelligence. 
          In this minor students learn, based on smart use of data and visualisations, to find, recognise, develop new insights and opportunities, 
          followed by a smart application of this knowledge. Additionally, data&visual literacy will be observed as well: plus a thorough understanding 
          of the role data and visualisations play within the 21st century, good interpretation of data and visualisations. As well as in which way 
          data and visualisations can/have to be used. Which will be achieved based on real-life cases and an interdisciplinary setting on-site. 
          For more information and how to enrol for this minor please click the following link
          <a className='hover:text-[red] text-black text-decoration-line: underline' href="https://www.kiesopmaat.nl/modules/zuyd/IB/142090/">: www.kiesopmaat.nl</a> 
          </p>
        </div>
        <div className='flex justify-end'>
          <img src={program_visualisation} alt="programs" className='object-contain w-[50%] h-[50%] md:object-scale-down' />
        </div>
      </div>
      

      <div className='flex flex-col py-6 items-center'>
        <h2 className='font-montserrat font-semibold text-gradient text-[40px] py-6'>Collaboration</h2>
        <p className='font-montserrat font-normal text-[16px] leading-normal max-w-[1000px] text-center'>
        Visual intelligence is not something new. Pre-historical art paintings 
        on walls were actually one of the first visuals which needed to tell other people a certain story. 
        However, due to the revelation computers are enabling many extraordinary software to transfer boring 
        numbers into nifty graph's. Therefore, Zuyd University decided to collaborate with Brightlands to do more research 
        and investigate more possibilities to represent exact data to humankind by creating visuals to easily understand information. 
        For example, there has been a collaboration Kay Schröder who made a data visualisation called “Certain Uncertainty” 
        which is nominated for the information is beautiful awards. This project displays the effects of climate change, especially water
        scarcity in certain regions within the world. For more information about this project please click the following link
        <a className='hover:text-[red] text-black text-decoration-line: underline' href="https://www.brightlands.com/en/brightlands-smart-services-campus/news/project-certain-uncertainty-nominated-information-beautiful">
         : Project Certain Uncertainty</a>
        </p>
      </div>

      <div className='flex flex-col py-6 items-center'>
        <h2 className='font-montserrat font-semibold text-gradient text-[40px] py-6'>Get In Touch</h2>
        <p className='font-montserrat font-normal text-[16px] leading-normal max-w-[1000px] text-center'>
        Are you interested in a collaboration? With Brightlands, the HDI-Lab or just for your company or 
        the company that you work for help solve an issue by integrating Visual Intelligence by the students 
        of the minor? Please reach out to us with your question or problem and maybe we can help you raise t
        he bar for you company to get to the next level. </p>
      </div>

      <div className='flex flex-col py-6 items-center'>
        <h2 className='font-montserrat font-semibold text-gradient text-[40px] py-6'>Internship @ Zuyd</h2>
        <p className='font-montserrat font-normal text-[16px] leading-normal max-w-[1000px] text-justify'>
        Are you a bachelor or master's student, or perhaps even a graduate who's 
        still looking for an internship at a company? Search no more! ZUYD University 
        offers many interesting projects with other companies and universities 
        where you can expand your knowledge about Visual Intelligence. 
        The internship contract will be with ZUYD University of Applied science. Meaning that during the internship 
        you will be a full-time employee and student at ZUYD, but you will work closely together with other companies through the HDI-Lab, 
        Brightlands or another collaborating firm. Enabling you the great opportunity to work together with many renowned companies, 
        who offer projects for a case study pending everything related to Visual Intelligence. Various subjects within these case studies can be outlined by, 
        for example:</p>
        <ul className='list-disc list-inside xl:ml-8 text-[16px] mt-4 sm:ml-0' >
          <li>Researching the optimal usage of big data</li>
          <li>Allocating AI within various business processes at collaborating companies</li> 
          <li>And/or establishing and researching the usage of cunning visuals to enhance and speed up various decision-making processes within a company</li>  
          <li>And many other related subjects in which Visual Intelligence will eventually thrive!</li> 
        </ul>
      </div>

      <div className='flex flex-row justify-evenly py-6'>
        <div className='flex flex-col'>
          <h2 className='font-montserrat font-semibold text-[40px]'>Contact</h2>
          <h3 className='font-montserrat font-medium text-[18px] leading-normal'> Lecturer <br /> Professor Ed Overes</h3>
          <div className='flex flex-row border-t-[1px]'>
            <ImMail4 className='mt-4' size={30}/>
            <p className='font-montserrat font-normal text-[16px] leading-normal mt-4 ml-2'>ed.overes@zuyd.nl</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-montserrat font-semibold text-[40px]'>Location</h2>
          <h3 className='font-montserrat font-medium text-[18px] leading-normal'>Zuyd University of Applied Science <br /> Faculty of International Business</h3>
          <div className='flex flex-row py-2 border-t-[1px]'>
            <ImLocation2 className='mt-2' size={30} />
            <p className='font-montserrat font-normal text-[16px] leading-normal ml-2'>Brusselseweg 150 <br /> 6217 HB Maastricht</p>
          </div>
        </div>
      </div>


    </section>
  )


export default About