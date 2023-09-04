/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-router-dom
import { Link, useNavigate } from 'react-router-dom'
// ? https://supabase.com/docs
import { supabase } from '../lib/supabase.client'

function SignUp() {
  document.title = 'SIGN UP // SUPA-COLLAB'

  // Login data const
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')

  // Popup const
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupContent, setPopupContent] = useState('')

  //
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== repeatPassword) {
      setPopupContent('Passwords do not match. Please try again.')
      setPopupVisible(true)
      return
    }

    try {
      // Check if the username already exists
      const { data: existingUsers, error: usernameError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)

      if (usernameError) {
        setUsernameError('An error occurred while checking the username.')
        return
      }

      if (existingUsers.length > 0) {
        setUsernameError(
          'Username already exists. Please choose a different username.',
        )
        return
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'localhost:5173/email-confirmation'
        }
      })

      if (error) {
        setPopupContent(error.message)
      } else {
        setPopupContent(
          'Signed up successfully. Please check your email for verification.',
        )
      }
      setPopupVisible(true)
    } catch (error) {
      setPopupContent('An unexpected error occurred. Please try again.')
      setPopupVisible(true)
    }
  }
  useEffect(() => {
    if (popupVisible) {
      const timeoutId = setTimeout(() => {
        setPopupVisible(false);
      }, 15000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [popupVisible]);
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
        <form className="border-orange-500" onSubmit={handleSignUp}>
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
            autoComplete="new-password"
            required
            className="mb-3 text-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            id="repeat-password"
            name="repeatPassword"
            type="password"
            autoComplete="new-password"
            required
            className="mb-3 text-black"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            className={`mb-3 text-black ${
              usernameError ? 'border-red-500' : ''
            }`}
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              setUsernameError('')
            }}
          />
          {usernameError && (
            <p className="text-red-500 text-sm mb-3">{usernameError}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-blue-500 underline">
            Sign in
          </Link>
        </p>
      </div>
      {popupVisible && (
        <div className="top-20 left-0 w-full bg-white p-4 rounded-md shadow-md text-center fixed">
          <button
            onClick={() => setPopupVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M14.348 5.652a1 1 0 011.414 1.414L6.414 15H15a1 1 0 110 2H5a1 1 0 01-1-1V4a1 1 0 112 0v8.586l8.293-8.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p>{popupContent}</p>
        </div>
      )}
    </div>
  )
}

export default SignUp
