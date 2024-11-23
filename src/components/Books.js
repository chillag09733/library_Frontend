import React, { useContext } from "react";
import Book from "./Book";
import '../App.css';
import { ApiContext } from "../context/apiContext";

function Books() {
  const { bookList } = useContext(ApiContext);
  return (
    <div className="booklayout">
      {bookList.map((product) => {
        return <Book product={product} key={product.book_id} />;
      })}
    </div>
  );
}

export default Books;
