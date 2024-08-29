import useAuthUser from "../../hooks/useAuthUser"
import "./Profile.css"

const Profile = () => {
  const { authUser } = useAuthUser();

  return (
    <div className="profile">
        <img src={authUser?.picture} />
        <p>{authUser?.name}</p>
    </div>
  )
}

export default Profile