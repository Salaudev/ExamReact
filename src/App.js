import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainPage from "./Pages//MainPage/MainPage";
import AddPage from "./Pages/AddPage/AddPage";
import EditPage from "./Pages/EditPage/EditPage";

function App() {
  const [card, setCard] = useState([
    {
      imgUrl: `https://avatars.mds.yandex.net/i?id=5fbb824e962b9a9a4bad798681813a70-5278354-images-thumbs&n=13`,
      title: "Modern lamp study1",
      price: "$258",
      id: 1,
    },
    {
      imgUrl: `https://avatars.mds.yandex.net/i?id=2cf1817eb029779b0db846c89fd5f3c2-3610079-images-thumbs&n=13`,
      title: "Modern lamp study2",
      price: "$258",
      id: 2,
    },
    {
      imgUrl: `https://imgaz.staticbg.com/images/oaupload/banggood/images/BA/5A/654f0436-c808-483e-8565-e3c20c36d5af.jpg`,
      title: "Modern lamp study3",
      price: "$258",
      id: 3,
    },
    {
      imgUrl: `https://avatars.mds.yandex.net/i?id=eebd68f4ce624af37aa61d6648adf5d8-4324454-images-thumbs&n=13`,
      title: "Modern lamp study4",
      price: "$258",
      id: 4,
    },
  ]);
  console.log(card, "card");
  useEffect(() => {}, card);
  return (
    <div className="App py-5">
      <Routes>
        <Route path="/" element={<MainPage data={card} />} />
        <Route
          path="/add"
          element={<AddPage func={(obj) => console.log(obj)} />}
        />
        <Route path="/edit:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
