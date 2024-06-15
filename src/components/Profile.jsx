import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div>
      {currentUser && currentUser ? (
        <div className="flex  items-center justify-center gap-3">
          <div className="flex flex-col gap-4">
            <img src={currentUser.data.image} alt="image" style={{width:'100px'}} />
            <span className="text-gray-500 font-serif font-semibold uppercase">
              user Logged as :-{" "}
            </span>
            <h1>{currentUser.data.email}</h1>
            <span className="text-gray-500 font-serif font-semibold uppercase">
              FirstName Is :-{" "}
            </span>
            <h1>{currentUser.data.firstName}</h1>
            <span className="text-gray-500 font-serif font-semibold uppercase">
              Last Name Is :-{" "}
            </span>
            <h1>{currentUser.data.lastName}</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
