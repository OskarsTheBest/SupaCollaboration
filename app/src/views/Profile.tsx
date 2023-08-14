/**
 * * Component imports
 */
import ProfileSidebar from '../components/profile/ProfileSidebar'
import ProfileActivity from '../components/profile/ProfileActivity'

function Profile() {
  document.title = 'PROFILE // SUPA-COLLAB'

  return (
    <section className="w-full h-auto flex justify-center items-center">
      <div className="flex max-lg:flex-wrap justify-center mt-[8%] mb-[5%]">
        <div className="w-[20vw] max-sm:w-[75%] max-md:w-[50%] max-lg:w-[40%] max-md:mt-7 h-[85%] flex justify-center">
          <ProfileSidebar />
        </div>
        <div className="w-[75vw] max-lg:w-[70%] flex justify-center">
          <ProfileActivity />
        </div>
      </div>
    </section>
  )
}

export default Profile
