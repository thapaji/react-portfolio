import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebaseConfig/firebase";
import "./App.css";

function App() {
  // const getdata = async () => {
  //   const querySnapshot = await getDocs(collection(db, "project"));
  //   console.log((querySnapshot));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };
  // getdata();

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
