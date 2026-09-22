import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

type Poster = {
  id: number;
  name: string;
  description: string;
  image: string;
  width: number;
  height: number;
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
  padding: 1rem 1rem 4rem;
`;

const Heading = styled.h1`
  color: #d97757;
  font-size: 2rem;
  margin: 0 0 2rem;
  text-decoration: underline;
  text-decoration-color: #55a9d6;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 2.5rem;
`;

const Filters = styled.aside`
  border-right: 1px solid #b98773;
  padding-right: 1.5rem;
  min-height: 500px;
`;

const FilterTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 0.6rem;
`;

const GenreTitle = styled.h3`
  font-size: 0.85rem;
  margin: 0 0 0.3rem;
`;

const Filter = styled.button`
  display: block;
  border: none;
  background: none;
  padding: 0.15rem 0;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: #d97757;
  }
`;

const FavoriteTitle = styled.h3`
  font-size: 0.85rem;
  margin-top: 2.5rem;
`;

const Product = styled.section`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: start;
`;

const Details = styled.div`
  padding-top: 0;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
`;

const Description = styled.p`
  max-width: 550px;
  line-height: 1.45;
  margin: 0 0 1.5rem;
`;

const Info = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.9rem;
`;

const Price = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CartButton = styled.button`
  padding: 0.6rem 1.3rem;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a4;
  }
`;

const FavoriteButton = styled.button`
  width: 42px;
  height: 38px;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a4;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
  border-radius: 3px;
`;

function PosterDetail() {
  const { id } = useParams();

  const { data, loading, error } = useFetch<Poster>(
    `http://localhost:3000/api/posters/${id}`
  );

  if (loading) {
    return <Page>Loading...</Page>;
  }

  if (error) {
    return <Page>Error: {error}</Page>;
  }

  if (!data) {
    return <Page>Poster not found</Page>;
  }

  return (
    <Page>
      <Heading>Plakater</Heading>

      <Content>
        <Filters>
          <FilterTitle>Filtre</FilterTitle>

          <GenreTitle>Genre</GenreTitle>

          <Filter>Action</Filter>
          <Filter>Adventure</Filter>
          <Filter>Dokumentar</Filter>
          <Filter>Drama</Filter>
          <Filter>Gyser</Filter>
          <Filter>Karatefilm</Filter>
          <Filter>Komedie</Filter>
          <Filter>Krigsfilm</Filter>
          <Filter>Krimi</Filter>

          <FavoriteTitle>Favoritter</FavoriteTitle>
        </Filters>

        <Product>
          <Details>
            <ProductName>{data.name}</ProductName>

            <Description>
              {data.description || "Ingen beskrivelse tilgængelig."}
            </Description>

            <Info>
              Størrelse: {data.width} x {data.height} cm
            </Info>

            <Info>Varenummer (SKU): {data.id}</Info>

            <Price>Pris: {data.price},00 DKK</Price>

            <Buttons>
              <CartButton>Læg i kurv</CartButton>

              <FavoriteButton>♡</FavoriteButton>
            </Buttons>
          </Details>

          <PosterImage src={data.image} alt={data.name} />
        </Product>
      </Content>
    </Page>
  );
}

export default PosterDetail;