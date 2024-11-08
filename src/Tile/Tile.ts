export enum Tile {
  AGREE = 'Agree',
  MYSELF = 'Myself',
  OPTIC = 'Optic',
  MATT = 'Matt',
  HEART = 'Heart',
  LOVE = 'Love',
  ARROW = 'Arrow',
  CUPID = 'Cupid',
  CUTE = 'Cute',
  YAPPER = 'Yapper',
  CHEF = 'Chef',
  INTELLIGENT = 'Smart',
  LOTS = 'Lots',
  LOADS = 'Loads',
  BUNCHES = 'Many',
  OODLES = 'Oodles',
}

export enum Category {
  I = "I",
  LOVE = "LOVE",
  YOU = "YOU",
  LOADS = "LOADS",
}

export function getCategory(tile: Tile): Category {
  switch (tile) {
    case Tile.AGREE:
    case Tile.MYSELF:
    case Tile.OPTIC:
    case Tile.MATT:
      return Category.I;
    case Tile.HEART:
    case Tile.LOVE:
    case Tile.ARROW:
    case Tile.CUPID:
      return Category.LOVE;
    case Tile.CUTE:
    case Tile.YAPPER:
    case Tile.CHEF:
    case Tile.INTELLIGENT:
      return Category.YOU;
    case Tile.LOTS:
    case Tile.LOADS:
    case Tile.BUNCHES:
    case Tile.OODLES:
      return Category.LOADS;
  }
}
