import React from 'react';
import { ImLocation2, ImMail4 } from 'react-icons/im';
import { program_visualisation } from '../assets';
import Timeline from './Timeline';

const About = () => (
    <section className='flex flex-col'>
      <div className='flex flex-col items-center py-6'>
        <div className='flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl max-w-[1000px]'>
          <h2 className='font-montserrat font-semibold text-[38px] text-center leading-normal py-6'>Information On The  
          <br className="sm:block hidden" /> Minor Visual <span className='text-tertiary'>Intelligence</span> </h2>
          <p className='font-montserrat font-normal text-[16px] leading-normal text-justify'>
          Within the ZUYD University of Applied Sciences there is a possibility to apply for a minor in Visual Intelligence. 
          In this minor students learn, based on smart use of data and visualisations, to find, recognise, develop new insights and opportunities, 
          followed by a smart application of this knowledge. Additionally, data&visual literacy will be observed as well: plus a thorough understanding 
          of the role data and visualisations play within the 21st century, good interpretation of data and visualisations. As well as in which way 
          data and visualisations can/have to be used. Which will be achieved based on real-life cases and an interdisciplinary setting on-site. 
          For more information and how to enrol for this minor please click the following link
          <a className='hover:text-[red] text-black text-decoration-line: underline' href="https://www.kiesopmaat.nl/modules/zuyd/IB/142090/">: www.kiesopmaat.nl</a> 
          </p>
        </div>
        <Timeline />
        
        <div className='flex flex-col p-6 items-center bg-secondary rounded-2xl max-w-[1000px] mt-10'>
          <h2 className='font-montserrat font-semibold text-black text-[40px] py-6'>Collaboration</h2>
          <p className='font-montserrat font-normal text-[16px] leading-normal text-justify'>
          Visual intelligence is not something new. Prehistoric art paintings on walls were among the first type of visuals to tell people a particular story. However, with the revelation of computers, special software can turn boring numbers into ingenious graphs. Therefore, Zuyd University decided to collaborate with Brightlands to do more research and explore more possibilities to display exact data to mankind, by creating visuals to make information easy to understand. For example, Kay Schroeder collaborated on a data visualization called "Certain Uncertainty" that was nominated for the information is beautiful awards. This project shows the effects of climate change, particularly water scarcity in certain regions of the world. For more information about this project, click on the following link
          <a className='hover:text-[red] text-black text-decoration-line: underline' href="https://www.brightlands.com/en/brightlands-smart-services-campus/news/project-certain-uncertainty-nominated-information-beautiful">
          : Project Certain Uncertainty</a>
          </p>
        </div>

        <div className='flex flex-col p-6 items-center bg-secondary rounded-2xl max-w-[1000px] my-10'>
          <h2 className='font-montserrat font-semibold text-black text-[40px] py-6'>Get In Touch</h2>
          <p className='font-montserrat font-normal text-[16px] leading-normal max-w-[1000px] text-justify'>
          Are you interested in a collaboration to help solve an issue that needs the visualisation of data? The students of the minor visual intelligence can help you with that. Please reach out to us with your question or problem and maybe we can help you raise the bar on data visualization.  </p>
        </div>

        <div className='flex flex-col p-6 items-center bg-secondary rounded-2xl max-w-[1000px]'>
          <h2 className='font-montserrat font-semibold text-black text-[40px] py-6'>Internship @ Zuyd</h2>
          <p className='font-montserrat font-normal text-[16px] leading-normal max-w-[1000px] text-justify'>
          Are you a bachelor or master's student, or perhaps even a graduate who's still looking for an internship at a company? Search no more! ZUYD University offers many interesting projects with other companies and universities where you can expand your knowledge of Visual Intelligence. The internship contract will be with ZUYD University of Applied science. Meaning that during the internship you will be a full-time employee and student at ZUYD, but you will work closely together with other companies through the HDI-Lab, Brightlands or another collaborating firm. Enabling you the great opportunity to work together with many renowned companies, who offer projects for a case study pending everything related to Visual Intelligence. Various subjects within these case studies can be outlined by, for example: </p>
          <ul className='list-disc list-inside xl:ml-8 text-[16px] mt-4 sm:ml-0' >
            <li>Researching the optimal usage of big data.</li>
            <li>Allocating AI within various business processes at collaborating companies.</li> 
            <li>And/or establishing and researching the usage of cunning visuals to enhance and speed up various decision-making processes within a company.</li>  
            <li>And many other related subjects in which Visual Intelligence will eventually thrive!</li> 
          </ul>
        </div>

        <div className='flex flex-row max-sm:flex-col p-6'>
          <div className='flex flex-col mr-[500px] max-sm:mr-0 max-sm:my-10'>
            <h2 className='font-montserrat font-semibold text-[40px]'>Contact</h2>
            <h3 className='font-montserrat font-medium text-[18px] leading-normal'> Lecturer <br /> Professor Ed Overes</h3>
            <div className='flex flex-row border-t-[1px]'>
              <ImMail4 className='mt-4' size={30}/>
              <p className='font-montserrat font-normal text-[16px] leading-normal mt-4 ml-2'>ed.overes@zuyd.nl</p>
            </div>
          </div>
          <div className='flex flex-col justify-end'>
            <h2 className='font-montserrat font-semibold text-[40px]'>Location</h2>
            <h3 className='font-montserrat font-medium text-[18px] leading-normal'>Zuyd University of Applied Science <br /> Faculty of International Business</h3>
            <div className='flex flex-row py-2 border-t-[1px]'>
              <ImLocation2 className='mt-2' size={30} />
              <p className='font-montserrat font-normal text-[16px] leading-normal ml-2'>Brusselseweg 150 <br /> 6217 HB Maastricht</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )


export default About