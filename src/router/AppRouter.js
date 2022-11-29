import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import About from "../components/About";
import Authors from "../components/Authors";
import { Redirect } from "react-router-dom";

//used the useLocalStorage hook
const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            />
            <Route
              render={(props) => <About {...props} about={About} />}
              path="/about"
            />
            <Route
              render={(props) => <Authors {...props} authors={Authors} />}
              path="/authors"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
