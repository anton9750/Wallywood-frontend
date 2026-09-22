import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PosterCard from "../partials/cards";

type Poster = {
  id: number;
  name: string;
  image: string;
  price: string;
  stock: number;
  genres: {
    genreId: number;
    posterId: number;
  }[];
};

const Page = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  color: #d97757;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;
`;

const Filters = styled.aside`
  border-right: 1px solid #ddd;
  padding-right: 1.5rem;
`;

const FilterTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Filter = styled.button`
  display: block;
  border: none;
  background: none;
  padding: 0.3rem 0;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const PosterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Plakater() {
  const { data, loading, error } = useFetch<Poster[]>(
    "http://localhost:3000/api/posters"
  );

  if (loading) {
    return <Page>Loading...</Page>;
  }

  if (error) {
    return <Page>Error: {error}</Page>;
  }

  return (
    <Page>
      <Header>
        <Heading>Plakater</Heading>

        <select>
          <option>Sorter efter</option>
          <option>Pris: lavest</option>
          <option>Pris: højest</option>
          <option>Navn</option>
        </select>
      </Header>

      <Content>
        <Filters>
          <FilterTitle>Filtre</FilterTitle>

          <Filter>Action</Filter>
          <Filter>Adventure</Filter>
          <Filter>Dokumentar</Filter>
          <Filter>Drama</Filter>
          <Filter>Gyser</Filter>
          <Filter>Komedie</Filter>
          <Filter>Krigsfilm</Filter>
          <Filter>Krimi</Filter>

          <FilterTitle>Favoritter</FilterTitle>
        </Filters>

        <Grid>
          {data?.slice(0, 8).map((poster) => (
            <PosterLink key={poster.id} to={`/plakater/${poster.id}`}>
              <PosterCard
                title={poster.name}
                description=""
                genre={poster.genres.map((genre) => genre.genreId).join(", ")}
                image={poster.image}
              />
            </PosterLink>
          ))}
        </Grid>
      </Content>
    </Page>
  );
}

export default Plakater;