import React, { useEffect, useState } from "react";
import { Container, Title,PokemonImg } from "./styles";
import { pokeData } from "../../services/apiPokemon";
import { View } from "react-native";

export const PokemonStatus = ({route}) => {
  const {pokemonStatus} = route.params;
  const colorPrimary = pokemonStatus.types?.[0]?.type.name;
  const colorSecondary = pokemonStatus.types?.[1]?.type.name;
  
  
  console.log(pokemonStatus);
  return (
    <Container colorTheme={colorPrimary ? colorPrimary : colorSecondary}>
     <Title>{pokemonStatus.name}</Title>
     <PokemonImg source={{ uri: `${pokemonStatus.sprites?.front_default}` }} />
     <View>
        <Title>dfsdf</Title>
     </View>
    </Container>
  );
};
