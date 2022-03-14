import React from "react";

import { Container, Title } from "./styles";

import { PokemonCard } from "../../components/PokemonCard";

export const PokeHome = () => {
  const qntCard = Array.from({ length: 10 });

  return (
    <Container>
      <Title>-----Poke lista!!-----</Title>
      {qntCard.map((_, index) => {
        return <PokemonCard key={index + 1} />;
      })}
    </Container>
  );
};
