import "./Profile.css";

const Profile = ({name='Jhon Doe', age='??', country='Japan'}) => {
  return (
  <div className="profile">
  <h3>Name: {name}</h3>
  <h3>Age: {age}</h3>
  <h3>Country: {country}</h3>
  </div>;
  );
};

export default Profile;
