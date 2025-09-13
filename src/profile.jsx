import Card from "./card.jsx"
import List from "./list.jsx"

export const Profile = () => {

const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "<https://cdn-icons-png.flaticon.com/512/2922/2922506.png>",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

    return (
        <>
        <Card avatar={userData.avatar} name={userData.username} 
        tag={userData.tag} location={userData.location} 
 />
       <List followers={userData.stats.followers} 
       views={userData.stats.views} likes={userData.stats.likes}/>
        </>
    )


}