import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features//Home/Home";
import About from "./features/About/About";
import Work from "./features/Work/Work";
import Posts from "./features/Posts/Posts";
import Users from "./features/Users/Users";
import PostById from "./features/Posts/components/PostById";
import Tasks from "./features/Tasks/Tasks";
import Clicks from "./features/Clicks/Clicks";
import Cart from "./features/Cart/Cart";
import Items from "./features/Items/Items";
import ItemsInCart from "./features/Items/components/ItemsInCart";
import Pokemons from "./features/Pokemons/Pokemons";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts/:postId" element={<PostById />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/clicks" element={<Clicks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items" element={<Items />} />
          <Route path="/orders" element={<ItemsInCart />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
