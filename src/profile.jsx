
const Profile = (props) => {
return (
    <div>
   <div>
      <img src={props.image} alt="avatar"/>
      <p>{props.name}</p>
      <p>@{props.tag}</p>
      <p>{props.location}</p>
    </div>

     <ul>
          
    <li>
      <span>Followers</span>
      <span>{props.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{props.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{props.likes}</span>
    </li>

    </ul>



    </div>
    );


};
export default Profile;