import styled from "styled-components";

export type Genre = {
  id: number;
  name: string;
};

const Filters = styled.aside`
  border-right: 1px solid #ddd;
  padding-right: 1.5rem;
`;

const FilterTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Filter = styled.button<{ $active?: boolean }>`
  display: block;
  border: none;
  background: none;
  padding: 0.3rem 0;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  color: ${(props) => (props.$active ? "#d97757" : "inherit")};

  &:hover {
    color: #d97757;
  }
`;

type GenreFiltersProps = {
  genres: Genre[] | null;
  selectedGenre: number | null;
  onSelect: (genreId: number | null) => void;
};

function GenreFilters({ genres, selectedGenre, onSelect }: GenreFiltersProps) {
  return (
    <Filters>
      <FilterTitle>Filtre</FilterTitle>

      <Filter $active={selectedGenre === null} onClick={() => onSelect(null)}>
        Alle
      </Filter>

      {genres?.map((genre) => (
        <Filter
          key={genre.id}
          $active={selectedGenre === genre.id}
          onClick={() => onSelect(genre.id)}
        >
          {genre.name}
        </Filter>
      ))}

      <FilterTitle>Favoritter</FilterTitle>
    </Filters>
  );
}

export default GenreFilters;