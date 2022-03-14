import styled from "styled-components/native";
const getColor = () => {
  return [
    {
      normal: "rgb(168, 168, 120)",
      fire: "rgb(240, 128, 48)",
      water: "rgb(104, 144, 240)",
      electric: "rgb(248, 208, 48)",
      grass: "rgb(120, 200, 80)",
      ice: "rgb(152, 216, 216)",
      ground: "rgb(224, 192, 104)",
      flying: "rgb(167, 143, 240)",
      ghost: " rgb(112, 88, 152)",
      rock: "rgb(184, 160, 56)",
      fighting: "rgb(192, 48, 40)",
      poison: "rgb(160, 64, 160)",
      fairy: "rgb(238, 153, 172)",
      psychic: "rgb(248, 88, 136)",
      bug: "rgb(168, 184, 32)",
      dark: "rgb(112, 88, 72)",
      steel: "rgb(184, 184, 208)",
      dragon: " rgb(112, 56, 248)",
    },
  ];
};

export const Container = styled.View`
  background-color: ${(props) =>`${ getColor()[0][props.colorTheme]}`};
  border: 1px solid #000;
  overflow: hidden;
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  .ViewStyle{
    width: 80%;
    background-color: white;
  }
  
`;
export const PokemonImg = styled.Image`

  width: 35%;
  height: 35%;
 

`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px black; ;
  `;
