/**
 * * Library imports
 */
import { useState } from 'react'
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://supabase.com/docs
import { supabase } from '../lib/supabase.client'

function SignIn() {
  document.title = 'SIGN IN // SUPA-COLLAB'

  // Login data const
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  //Popp up handling
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupContent, setPopupContent] = useState('')



  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setPopupContent('Sign in failed. Please check your credentials.')
      } else {
        setPopupContent('Logged in successfully');
       // TO DO fix it
       // navigate("/profile");
      }
      setPopupVisible(true)
    } catch (error) {
      setPopupContent('An unexpected error occurred. Please try again.')
      setPopupVisible(true)
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center 2xl:h-[80vh]">
      <div className="border-2 border-gray-800 bg-white rounded-md p-4 w-80">
        <div className="flex items-center">
          <h1 className="py-2 text-2xl font-extrabold font-Roboto tracking-wider flex items-center text-black text-center">
            SupaCollab
          </h1>
          <img
            className="h-8 w-8 mb-2 ml-1"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Supacollab"
          />
        </div>
        <form className="border-orange-500" onSubmit={handleSignIn}>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mb-3 text-black"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mb-3 text-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-blue-500 underline">
            Create one
          </Link>
        </p>
      </div>
      {popupVisible && (
        <div className="popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md">
          <p className="text-center">{popupContent}</p>
          <button
            onClick={() => setPopupVisible(false)}
            className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default SignIn
