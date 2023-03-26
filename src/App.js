import React from 'react';
import './App.css';
import Button from "./components/Buttons";
import Product from "./components/Products";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Tile from "./components/Tiles";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
            title="to the collection"
            type="button"
            disabled={false}
          />
          <Button
            title="all bags"
            type="button"
            disabled={false}
          />
          <Button
            title="pre-orders"
            type="button"
            disabled={true}
          />
        </nav>
        <main>
          <Product
            label="Best seller"
            image={bag_1}
            name="The handy bag"
            price="400"
          />
          <Product
            label="Best seller"
            image={bag_2}
            name="The stylish bag"
            price="250"
          />
          <Product
            label="New collection"
            image={bag_3}
            name="The simple bag"
            price="300"
          />
          <Product
            label="New collection"
            image={bag_4}
            name="The trendy bag"
            price="150"
          />
        </main>
        <footer>
          <Tile>
            <h2>The brand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id illo laboriosam non optio placeat praesentium quaerat reprehenderit, sint veniam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id illo laboriosam non optio placeat praesentium quaerat reprehenderit, sint veniam.</p>
          </Tile>
          <Tile>
            <img src={brand} alt="Brand"/>
          </Tile>
          <Tile>
            <img src={our_story} alt="our story"/>
          </Tile>
          <Tile>
            <h2>Our story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequatur dicta dolore dolorum eligendi ex expedita hic iure mollitia natus nisi optio,
                praesentium quam qui quod reiciendis sit unde!
            </p>
          </Tile>
        </footer>
      </>
  );
}

export default App;



