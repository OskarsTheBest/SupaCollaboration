/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

/**
 * * Component imports
 */
import LoadingBar from '../components/LoadingBar'
import errorSvg from '../assets/error.svg'

function ErrorPage() {
  document.title = '404 NOT FOUND // SUPA-COLLAB'

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#error',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  return (
    <>
      {!isLoaded && (
        <div className="loading-screen fixed top-0 left-0 w-full h-full flex justify-center items-center z-40  ">
          <LoadingBar />
        </div>
      )}
      <section className="w-full h-screen   flex justify-center items-center">
        <div id="error">
          <img
            className="block w-[60%] ml-[20%] 2xl:w-[90%] 2xl:ml-[5%]"
            src={errorSvg}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="text-center mt-4 text-4xl font-semibold 2xl:text-4xl">
            Error: Page Not Found
            <br />
            <Link to={'/'} className="no-underline text-black text-3xl">
              Take me home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
