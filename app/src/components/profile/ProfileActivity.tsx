/**
 * * Library imports
 */
import { useEffect } from 'react'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

function ProfileActivity() {
  // Animations
  useEffect(() => {
    const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#activity',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  return (
    <div
      className="w-[98%] h-auto lg:m-4 lg:mt-6 bg-gray-100 rounded-2xl pt-3 pb-3 border-2 border-black"
      id="activity"
    >
      <div className="w-full h-full">
        <div className="mt-[2%] ml-[5%] mr-[5%] mb-5">
          <p className="text-3xl font-bold">User Information:</p>
          <div className="flex flex-wrap justify-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            arcu euismod, gravida libero non, suscipit nisl. Quisque mollis
            purus id nibh dapibus, id venenatis est dignissim. Nam a libero eu
            dui elementum aliquet vel ut ipsum. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla auctor, ipsum ut cursus
            volutpat, augue ex ultrices mauris, luctus pulvinar dolor est id
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque a justo hendrerit, ultrices nunc sit amet, fringilla mi.
            Vestibulum porttitor tellus neque, sit amet sagittis velit tincidunt
            a. Fusce molestie ex eget convallis aliquam. Morbi ipsum nisl,
            dignissim ut purus tempus, suscipit interdum tortor. Pellentesque
            metus mauris, rutrum ac felis et, blandit porta leo. Nam metus
            massa, laoreet et mollis et, elementum vitae dui. Vivamus porta elit
            a efficitur mattis. Suspendisse accumsan urna ut nibh maximus
            molestie. Donec fermentum lacus vitae mattis pharetra. Morbi ut
            justo at nulla pulvinar luctus. Phasellus in turpis venenatis magna
            varius euismod eget non mauris. Cras tempus nisl iaculis sem commodo
            convallis. Pellentesque tincidunt lacus nibh, quis laoreet augue
            ornare non. Suspendisse potenti. Donec luctus efficitur mauris,
            mattis posuere orci tempus a.
          </div>
        </div>
        <div className="mt-[2%] ml-[5%] mr-[5%] mb-5">
          <p className="text-3xl font-bold">User Activity:</p>
          <div className="flex flex-wrap justify-start"></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileActivity
