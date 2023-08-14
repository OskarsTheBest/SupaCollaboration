/**
 * * Library imports
 */
import { useEffect } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import { Button, Form } from 'react-bootstrap'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

function TeamsSidebar() {
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
    <div
      className="w-[90%] h-[95%] m-4 bg-gray-100 rounded-2xl pt-3 pb-3 border-2 border-black"
      id="sidebar"
    >
      <ul className="mt-[9%] mb-[9%] mr-[10%]">
        <li>
          <Form.Control type="text" placeholder="Search Team Name" />
          <Button variant="dark" type="submit" className="mt-2 font-bold">
            Search <i className="fa-solid fa-magnifying-glass ml-2"></i>
          </Button>
        </li>
        <li>
          <h5 className="mt-3">Filters:</h5>
        </li>
        <li>
          <Form>
            {[
              'Open Teams',
              'Closed Teams',
              'Python',
              'Flutter',
              'Typescript',
              'Website',
              'Desktop Application',
              'Mobile Application',
            ].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check id={`${type}`} label={`${type}`} />
              </div>
            ))}
          </Form>
        </li>
      </ul>
    </div>
  )
}

export default TeamsSidebar
