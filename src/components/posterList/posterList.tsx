import styled from "styled-components";
import { useRandomPosters } from "../../hooks/userandomposters";
import PosterCard from "../../partials/cards";

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Heading = styled.h2`
  color: #d97757;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

function PosterList() {
  const { data, loading, error } = useRandomPosters(
    "http://localhost:3000/api/posters",
    4
  );

  if (loading) {
    return <Section>Loading...</Section>;
  }

  if (error) {
    return <Section>Error: {error}</Section>;
  }

  return (
    <Section>
      <Heading>Fire tilfældige plakater</Heading>

      <Grid>
        {data.map((poster) => (
          <PosterCard
            key={poster.id}
            title={poster.name}
            description={poster.description?.slice(0, 120) ?? ""}
            genre={poster.genres.map((genre) => genre.genreId).join(", ")}
            image={poster.image}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default PosterList;