


export const List =(props) => {
    return (
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

    )

}