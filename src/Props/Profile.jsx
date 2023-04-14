import { getImageUrl } from "./utility.jsx";

function Profile({ person, imageSize }) {
  const imageSrc = getImageUrl(person);

  return (
    <>
      <section className="profile">
        <h2>Props</h2>
        <img
          className="avatar"
          src={imageSrc}
          alt={person.name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession:</b> {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
      </section>
    </>
  );
}

export default Profile;
