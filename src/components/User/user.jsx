import userS from './user.module.css';
import clsx from 'clsx';
import { CiUser } from "react-icons/ci";

const User = ({ name, email, bio, isOpenToWork }) => {
  return (
    <div className={userS.card}>
			<h3 style={{ backgroundColor: "grey", color: "white" }}><CiUser className={userS.userIcon} />{name}</h3>
      <p className="mail">{email}</p>
      <p>{bio}</p>
      <p className={clsx(isOpenToWork ? userS.green : userS.red)}>
        {isOpenToWork ? "ready to work" : "not ready to work"}
      </p>
      <button>Delete</button>
    </div>
  );
};

export default User