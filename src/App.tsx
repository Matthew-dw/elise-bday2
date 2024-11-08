import { useState } from 'react';
import './App.css';
import { Category, getCategory, Tile } from './Tile/Tile';
import { TileCard } from './Tile/TileCard';

function shuffleArray(array: Array<number>) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function initPositions() {
  const a = Array.from(Array(16).keys())
  shuffleArray(a)
  return a
}

function App() {
  const [positions, setPositions] = useState(initPositions());
  const [selected, setSelected] = useState<Set<Tile>>(new Set());
  const [solvedTiles, setSolvedTiles] = useState<Set<Tile>>(new Set());
  const [solvedCategories, setSolvedCategories] = useState<Set<Category>>(new Set())

  const shuffle = () => {
    const newPositions = [...positions];
    shuffleArray(newPositions);
    setPositions(newPositions);
  };

  const deselectAll = () => {
    setSelected(new Set());
  };

  const submit = () => {
    if (selected.size < 4) return;
    const selectedTileList = Array.from(selected)
    const cat = getCategory(selectedTileList[0]);
    if (Array.from(selected).every((tile) => getCategory(tile) === cat)) {
      const newSolved = new Set(solvedTiles)
      selected.forEach(tile => newSolved.add(tile))
      setSolvedTiles(newSolved)
      setSolvedCategories(new Set(solvedCategories).add(cat))
    }
    deselectAll();
  };

  const categories = Object.values(Category).map(cat => {
    if (solvedCategories.has(cat)) {
      return <div className={`block category ${cat}`}>
        {cat}
      </div>
    }
  })

  const tiles = Object.values(Tile).map((tile, index) => {
    if (solvedTiles.has(tile)) {
      return null
    }
    const props = {
      tile: tile,
      position: positions[index],
      selected: selected.has(tile),
      selectFunction: () => setSelected(select(tile, selected)),
    }
    return <TileCard {...props} key={index} />
  })

  return (
    <div className='game'>
      <div className='container categories'>
        {categories}
      </div>
      {tiles.filter(x => x!=null).length != 0 && <div className='container tiles'>
        {tiles}
      </div>}
      <div className='container buttons'>
        <button className='block control' onClick={() => shuffle()}>
          Shuffle
        </button>
        <button className='block control' onClick={() => deselectAll()}>
          Deselect all
        </button>
        <button className='block control' onClick={() => submit()}>
          Make Guess
        </button>
      </div>
    </div>
  );
}

const select = (tile: Tile, initialSet: Set<Tile>) => {
  const selected = new Set(initialSet);

  if (selected.has(tile)) {
    selected.delete(tile);
  } else if (selected.size < 4) {
    selected.add(tile);
  }

  return selected
};


export default App;
