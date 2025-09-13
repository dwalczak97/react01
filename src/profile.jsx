import "./App.css"

const Profile = (props) => {
return (
    <div className="box">
   <div>
      <img src={props.image} alt="avatar" className="image"/>
      <h3>{props.name}</h3>
      <p className="colorp">@{props.tag}</p>
      <p className="colorp">{props.location}</p>
    </div>

     <ul className="ul">
          
    <li className="li">
      <span>Followers</span>
      <span>{props.followers}</span>
    </li>
    <li className="li">
      <span>Views</span>
      <span>{props.views}</span>
    </li>
    <li className="li"> 
      <span>Likes</span>
      <span>{props.likes}</span>
    </li>

    </ul>



    </div>
    );


};
export default Profile;