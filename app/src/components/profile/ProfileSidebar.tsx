/**
 * * Library imports
 */
import { useMemo, useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/@dicebear/avatars
// ? https://www.dicebear.com/how-to-use/js-library
import { createAvatar } from '@dicebear/core'
import { notionists } from '@dicebear/collection'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

/**
 * * Component imports
 */
import LoadingBar from '../LoadingBar'

function ProfileSidebar() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Generates avatar
  const avatar = useMemo(() => {
    return createAvatar(notionists, {
      seed: 'hfhjfhgd',
      backgroundColor: ['c0aede'],
      size: 256,
    }).toDataUriSync()
  }, [])

  // Animations
  useEffect(() => {
    const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#sidebar',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  return (
    <>
      {!isLoaded && (
        <div className="loading-screen fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-bg-svg bg-cover bg-no-repeat">
          <LoadingBar />
        </div>
      )}
      <div
        className="w-[100%] h-[95%] m-3 mt-4 bg-gray-100 rounded-2xl pt-3 pb-3 border-2 border-black"
        id="sidebar"
      >
        <div className="mt-[8%] ml-[10%]">
          <img
            src={avatar}
            alt="Avatar"
            className="border-2 border-black rounded-[50%]"
            width="70%"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <ul className="mt-[9%] mb-[9%] mr-[10%]">
          <li>
            <div className="text-lg">Username: Tester</div>
          </li>
          <li>
            <div className="text-base">Joined: 07.08.2023</div>
          </li>
          <li>
            <div className="text-base">Github: random link</div>
          </li>
          <br />
          <li className="font-bold">Tags:</li>
          <li>
            <div className="flex flex-wrap  ">
              <div className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
                DevOps
              </div>
              <div className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
                Frontend
              </div>
              <div className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
                Backend
              </div>
              <div className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
                Databases
              </div>
              <div className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
                IoT
              </div>
              <div className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
                3D modeling
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProfileSidebar
