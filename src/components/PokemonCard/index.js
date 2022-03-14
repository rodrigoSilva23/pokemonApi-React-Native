import React, { useEffect, useState } from "react";
import { Container, Title,PokemonImg } from "./styles";
import { pokeData } from "../../services/apiPokemon";
import {Pressable} from 'react-native';
import { useNavigation} from "@react-navigation/native";

export const PokemonCard = () => {
  const [pokemonStatus, setPokemonStatus] = useState([]);

  const getPokemonsStatus = async () => {
    const randomNum = Math.floor(Math.random() * 807 + 1); 
    await pokeData(`/${randomNum}/`).then((response) => {
      setPokemonStatus(response.data);
    });
  };
  const colorPrimary = pokemonStatus.types?.[0]?.type.name;
  const colorSecondary = pokemonStatus.types?.[1]?.type.name;
  const navigation = useNavigation();
  useEffect(() => {
    getPokemonsStatus();
  }, []);
  
  return (
    <Container 
    colorTheme={colorPrimary ? colorPrimary : colorSecondary}
    onPress={() => navigation.navigate('PokeStatus',{pokemonStatus})}
    
    >
      <Title >{pokemonStatus.name}</Title>
      <PokemonImg source={{ uri: `${pokemonStatus.sprites?.front_default}` }} />
    </Container>
  );
};
