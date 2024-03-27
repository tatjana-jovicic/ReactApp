import { useState } from "react";
import User from "./components/User";
import "./Users.css";

const Users = () => {
  // eslint-disable-next-line no-unused-vars
  const [object, setObject] = useState([
    {
      name: "Anastasija",
      age: 23,
      city: "Doboj",
      email: "anastasijas101@gmail.com",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/021/610/077/small_2x/young-latin-woman-is-winking-avatar-portrait-human-emotions-playful-funny-support-female-flat-style-free-vector.jpg",
    },
    {
      name: "Tatjana",
      age: 23,
      city: "Teslic",
      email: "tatjanajovicic@gmail.com",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/020/271/580/small_2x/portrait-of-a-young-blond-woman-full-face-portrait-in-flat-style-avatar-female-diversity-free-vector.jpg",
    },
    {
      name: "Aleksa",
      age: 25,
      city: "Drvar",
      email: "aleksajovic@gmail.com",
      imageUrl:
        "https://img.freepik.com/premium-vector/icon-man-s-face-with-light-skin_238404-1006.jpg",
    },
    {
      name: "Jovana",
      age: 23,
      city: "Doboj",
      email: "jovanakostic@gmail.com",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWomPds9w5emH_C6RY8xF7KRCJe6I5zwVsuw&usqp=CAU",
    },
    {
      name: "Mario",
      age: 23,
      city: "Prijedor",
      email: "marioratkovic@gmail.com",
      imageUrl:
        "https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094779-stock-illustration-profile-icon-male-avatar.jpg",
    },
    {
      name: "Ademir",
      age: 23,
      city: "Sarajevo",
      email: "ademircasuevic@gmail.com",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHCchgR9yI8BLzLuPTtAZKkC6DgKAk8MNtA5TOSNSFjv1NQjSjCNUSgl_7w7B89f6yGk&usqp=CAU",
    },
  ]);

  return (
    <>
      <div className="divClass">
        {object.map((Users) => (
          // eslint-disable-next-line react/jsx-key
          <div className="dataMapDiv">
            <User
              imageUrl={Users.imageUrl}
              name={Users.name}
              age={Users.age}
              city={Users.city}
              email={Users.email}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
