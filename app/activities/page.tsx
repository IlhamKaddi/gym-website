"use client" ;
import ActivitiesContent from '../compenents/Activities/Content';
import ActivitiesHero from '../compenents/Activities/Hero'
import { Navbar } from '../compenents/Navbar';

function Activities() {
  return (
    <div>
           <Navbar className='bg-zinc-950'/>
      <ActivitiesHero/>
      <ActivitiesContent/>
    </div>
  )
}

export default Activities
