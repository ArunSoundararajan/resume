
import './App.css';
import bike from './Assets/bike-motorcycle-icon.png'
import Career from './Components/Career';
import Details from './Components/Details';
import Internship from './Components/Internship';
import Profiledescription from './Components/Profiledescription';
import Profilepic from './Components/Profilepic';
import Profilesummary from './Components/Profilesummary';
import Project from './Components/Projects';
import Work from './Components/Work';

function App() {
  return (
    <>
    <div className="flex m-5 flex-row gap-2">
      <div className='inline-flex justify-center basis-1/3  bg-slate-600'>
        <Profilepic/>

      </div>
      <div className='basis-2/3 tracking-[.5em] mx-4 border-b-4 border-sky-400 leading-9 text-sky-400'>
      <Profiledescription/>
      </div>
    </div>
    {/* 2nd section */}
  <div className="flex  mx-5 mt-5 flex-row gap-2">
  <div className='basis-1/3 p-5 lg:pt-20 bg-sky-400'>
  <Profilesummary heading="PROFILE SUMMARY"
     content ="An experienced web developer with strong interest in projects that require
     both conceptual & analytical thinking.
     Fully-committed to design and develop
     innovative web tools which ease the end-
     user work with better user interface."
     />
   </div>
   <div className='basis-2/3  mx-4 text-black '>
   <h1 className="tracking-wider font-extrabold">WORK EXPERIENCE</h1>
      <Work />
      </div>

    </div>
      {/* 3rd section */}
      <div className="flex  mx-5 flex-row gap-2">
  <div className='basis-1/3 p-5 lg:pt-20 bg-sky-400'>
     <Profilesummary heading="OBJECTIVE"
     content ="As a Front-end UI developer developing a
     web application with good looking UI and
     keen to learn any type of technologies
     depending on the project needs"
     />
   </div>
   <div className='basis-2/3  mx-4 mt-10 text-black'>
   <h1 className="tracking-wider font-extrabold">INTERNSHIP</h1>
      <Internship/>
      </div>

    </div>
      {/* 4th section */}

      <div className="flex  mx-5 flex-row gap-2">
  <div className='basis-1/3 p-5 lg:pt-20  bg-slate-100'>
     <Profilesummary heading="HOW TO CONTACT ME"/>
     <p className='break-all'>Email: arunsoundararajan4053@gmail.com</p>
     <p >Phone: 6383055031</p>
     <p >Address: 310/12, AR Castle,</p>
     <p className='break-all'>Alagarsingampatty, Dindigul 624004</p>
   </div>
   <div className='basis-2/3  mx-4 mt-10 text-black'>
   <h1 className="tracking-widest font-extrabold">EDUCATION</h1>
   <Details/>
   
      </div>

    </div>

      {/* 5th section */}
      <div className="flex  mx-5  flex-row gap-2">
  <div className='basis-1/3 p-5 sm:pt-36 lg:pt-28 bg-sky-400'>
  <Profilesummary heading="INTERESTS"/>
  <div className='lg:inline-flex md:inline-flex sm:block gap-4 lg:pl-9'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
 </svg>
 
 <img src={bike} alt='bike' className='w-10 h-10 sm:w-6'/>

 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-10 h-1o">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
</svg>


</div>
</div>
   <div className='basis-2/3  mx-4 mt-5 text-black'>
   <h1 className="tracking-wider font-extrabold">CAREER PROGRESSION</h1>
   <Career/>
      
      </div>

    </div>

    
      {/* 6th section */}

      <div className="flex  mx-5 flex-row gap-2">
  <div className='basis-1/3 p-5 lg:pt-20 bg-sky-400'>
     <Profilesummary heading="WHAT NEXT?"/>
     <ul className=" pl-10 text-slate-100 list-disc w-4/5">
      <li>Enrolled course on Complete
      bootcamp on React JS</li>
      <li>Activily solving javascript problems in
      leetcode</li>
      <li>Strong Intrests in backend technology
      using node js platform</li>

     </ul>
   </div>
   <div className='basis-2/3  mx-4 mt-10 text-black'>
   <Project title="NOVARTIS" 
   tech="TECHNOLOGY :"
   timeline="COGNIZANT | JAN 2022 - PRESENT"
   list1="Have developed a E-Learning application using
   React Js for internal training in the organization"
   list2="This application consists of multiple user login.So if
   the users fails to complete his activity on time will
   send a auto-triggered mail to HR adminstration"
   skills="Javascript,ReactJS,Sharepoint,HTML and
   CSS"
   
   />
      </div>

    </div>

     {/* 7th section */}
     <div className="flex  mx-5 flex-row gap-2">
  <div className='basis-1/3 p-5 lg:pt-20 bg-sky-400 break-all'>
     <Profilesummary heading="QUICK INSIGHTS"/>
     <p>linkedin:</p>
     <a href="https://www.linkedin.com/in/arunsoundararajan" className='text-slate-100'>
      https://www.linkedin.com/in/arunsoundararajan</a>
     <p>leetcode:</p>
     <a href='https://leetcode.com/arunsoundararajan4053' className='text-slate-100'>
      https://leetcode.com/arunsoundararajan4053</a>
     <p>HackerRank:</p>
     <a href='https://www.hackerrank.com/certificates/899636cfcf8f' className='text-slate-100'>
      https://www.hackerrank.com/certificates/899636cfcf8f</a>
   </div>
   <div className='basis-2/3  mx-4 mt-10 text-black'>
   <h1 className="tracking-wider font-extrabold">PET PROJECTS</h1>
   <Project title="INFRA VIEW" 
   list1="Build an single page application module using
   React for a Hospitality Management enterprise
   based on their requirements"
   list2="The application also consist of Responsive Mobile
   View so end user can access across multiple
   devices"
   
   />
   <Project title="SOCIAL FUNDING APP" 
   tech="TECHNOLOGY :"
   skills="Javascript,ReactJS,HTML, and Tailwind CSS"
   list1="Developed an application for NGO Organisation to
   register/organise social welfare activities and
   seeking volunteer support."
   list2="The application also consists of payment gateway
   integration for getting funding from public"
   
   />
      </div>

    </div>


    </>
  );
}

export default App;
