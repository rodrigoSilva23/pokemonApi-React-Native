import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokeHome } from "../pages/PokeHome";
import { PokemonStatus } from "../pages/PokeStatus";



const Stack = createNativeStackNavigator();
export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokeHome" >
        <Stack.Screen name="PokeHome" component={PokeHome}  />
        <Stack.Screen name="PokeStatus" component={PokemonStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
