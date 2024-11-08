import { Tile } from "./Tile";

export type TileCardProps = {
  tile: Tile;
  position: number;
  selected: boolean;
  selectFunction: () => void;
};

export function TileCard(props: TileCardProps) {
  const className = `block tile ${props.selected ? 'selected' : ''}`;
  return (
    <button
      className={className}
      style={{ order: props.position }}
      onClick={() => props.selectFunction()}
    >
      {props.tile}
    </button>
    
  );
}