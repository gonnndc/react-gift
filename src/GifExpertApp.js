import "./styles.css";
import AddCategory from "./components/AddCategory";
import GiftGridList from "./components/GiftGridList";
import Header from "./components/Header";
import { useState } from "react";

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="GifExpertApp">
      <Header />
      <AddCategory categories={categories} setCategories={setCategories} />
      <GiftGridList categories={categories} setCategories={setCategories} />
    </div>
  );
}
