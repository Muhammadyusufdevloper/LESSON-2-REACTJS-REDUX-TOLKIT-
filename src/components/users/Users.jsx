import PropTypes from "prop-types";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFormUser } from "../../context/slice/userSlice";
import { followUser } from "../../context/slice/followSlice";

function Users({ data }) {
  const dispatch = useDispatch();
  const follow = useSelector(state => state.follow.value)
  const userElements = data?.map((user) => (
    <div key={user.id} className="users__card">
      <img src={user.gender === "male" ? male : female} alt={`${user.gender} avatar`} />
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.profession}</p>
      <div>
        <p>{user.age} years old</p>
        <p className="users__card__time"></p>
      </div>
      <div>
        <button onClick={() => dispatch(removeFormUser(user))}>Remove</button>
        <button onClick={() => dispatch(followUser(user))}>
          {
            follow.some((follow) => follow.id === user.id) ? "Following" : "Follow"
          }
        </button>
        <button>Edit</button>
      </div>
    </div>
  ));

  return <div className="users__wrapper">{userElements}</div>;
}

Users.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.oneOf(["male", "female"]).isRequired,
    })
  ).isRequired,
};

export default Users;
