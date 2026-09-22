export interface PosterGenre {
  genreId: number;
  posterId: number;
}

export interface Poster {
  id: number;

  name: string;

  slug: string;

  description: string;

  image: string;

  width: number;


  height: number;

  price: string;

  stock: number;

  createdAt: string;

  updatedAt: string;


  
  genres: PosterGenre[];
}