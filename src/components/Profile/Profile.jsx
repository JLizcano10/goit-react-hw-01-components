import { ProfileContainer, ProfileDescription, ProfileImage, ProfileName, ProfileStatBox,  ProfileStatsLabel,  ProfileStatsListItem, ProfileStatsQuantity, ProfileText} from "./Profile.styles";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const propertyNames = Object.keys(stats);

  return (
    <ProfileContainer className="profile">
      <ProfileDescription className="description">
        <ProfileImage src={avatar} alt={username} className="avatar" />
        <ProfileName className="name">{username}</ProfileName>
        <ProfileText className="tag">{`@${tag}`}</ProfileText>
        <ProfileText className="location">{location}</ProfileText>
      </ProfileDescription>
      
      <ProfileStatBox className="stats">
          {propertyNames.map(propertyName => (
            <ProfileStatsListItem key={propertyName}>
              <ProfileStatsLabel className="label">{propertyName}</ProfileStatsLabel>
              <ProfileStatsQuantity className="quantity">{stats[propertyName]}</ProfileStatsQuantity>
            </ProfileStatsListItem>
          ))}
      </ProfileStatBox>
    </ProfileContainer>
  );
};

export default Profile;
