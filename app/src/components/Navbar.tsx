/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://www.npmjs.com/package/react-bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="bg-gray-950"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Brand href="/" className="flex items-center">
            <h3 className="text-white font-bold mr-2 mt-1">SupaCollab</h3>
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Supacollab"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Link
                to={'/sign-in'}
                className="text-gray-300 bg-green-500 hover:bg-green-600 hover:text-white px-3 py-2 no-underline rounded-md w-[85px]"
              >
                Sign-in
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
