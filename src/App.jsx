import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";
import filmArray from "./assets/filmArray.json";

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };
  console.log(filmArray);
  return (
    <div className="App">
      <Navbar />
      <CardList
        title="Top series"
        BASE_URL="https://edgemony-backend.herokuapp.com/series"
        mockData=""
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL="https://edgemony-backend.herokuapp.com/movies"
        mockData=""
        modalVisibility={onHandleModal}
      />

      <CardList
        title="film da mock locale"
        BASE_URL=""
        mockData={filmArray}
        modalVisibility={onHandleModal}
      />
      <Modal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      />
      <Footer />
    </div>
  );
}

export default App;
