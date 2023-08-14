/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-simple-typewriter
import { Typewriter } from 'react-simple-typewriter'
import '../css/cube.css'

function LoadingBar() {
  return (
    <div className="h-20 w-[90px]">
      <div className="w-full flex justify-center">
        <div className="cube">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <h5 className="mt-4">
        <Typewriter
          words={['Loading...']}
          loop={-1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={90}
          delaySpeed={1000}
        />
      </h5>
    </div>
  )
}

export default LoadingBar
