/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/**
 * * Route/Component imports
 */
import HomePage from './views/Home'
import ErrorPage from './views/Error'
import TeamsPage from './views/Teams'
import ProfilePage from './views/Profile'

import SignInPage from './views/SignIn'
import SignUpPage from './views/SignUp'

import EmailConfirmationPage from './views/EmailConfirmation'

import TermsConditionsPage from './views/TermsConditions'
import PrivacyPolicyPage from './views/PrivacyPolicy'
import ContactsPage from './views/Contacts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route
            path="/email-confirmation"
            element={<EmailConfirmationPage />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
