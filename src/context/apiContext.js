import { createContext, useEffect, useState } from "react";
import { myAxios } from "./myAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  function getAdat(endpoint) {
   myAxios
      .get(endpoint)
      .then(function (response) {
        console.log(response.data);
        setBookList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  function postAdat(endpoint, adat) {
    myAxios
      .get(endpoint, adat)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  useEffect(() => {
    getAdat("/books");
  }, []);

  return (
    <ApiContext.Provider value={{ bookList, postAdat }}>{children}</ApiContext.Provider>
  );
};
