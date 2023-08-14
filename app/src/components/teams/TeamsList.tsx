/**
 * * Library imports
 */
import { useEffect } from 'react'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

function TeamsList() {
  // Animations
  useEffect(() => {
    const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#list',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  return (
    <div
      className="w-[98%] h-auto m-4 bg-gray-100 rounded-2xl pt-3 pb-3 border-2 border-black"
      id="list"
    >
      <div className="w-full h-full">
        <div className="mt-[2%] ml-[5%] mr-[5%] mb-5">
          <p className="text-3xl font-bold">Your Teams:</p>
          <div className="flex flex-wrap justify-start"></div>
        </div>
        <div className="mt-[2%] ml-[5%] mr-[5%] mb-5">
          <p className="text-3xl font-bold">Teams List:</p>
          <div className="flex flex-wrap justify-start"></div>
        </div>
      </div>
    </div>
  )
}

export default TeamsList
