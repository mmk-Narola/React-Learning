import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <Profile
        person={{
          imageId: "szV5sdG",
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          discovery: "polonium (chemical element)",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
        imageSize={50}
      />
    </div>
  );
}
