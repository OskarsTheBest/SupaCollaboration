/**
 * * Component imports
 */
import TeamsList from '../components/teams/TeamsList'
import TeamsSidebar from '../components/TeamsSidebar'

function Profile() {
  document.title = 'TEAMS // SUPA-COLLAB'

  return (
    <section className="w-full h-auto min-h-screen flex justify-center items-center">
      <div className="flex justify-center mt-[8%] mb-[5%]">
        <div className="w-[75vw]">
          <TeamsList />
        </div>
        <div className="w-[20vw] h-[85%] ml-[3%]">
          <TeamsSidebar />
        </div>
      </div>
    </section>
  )
}

export default Profile
