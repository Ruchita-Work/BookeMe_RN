import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { IMainStackScreenParams } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const useAppNavigation = <T extends keyof IMainStackScreenParams>() => {
  type Props = NativeStackScreenProps<IMainStackScreenParams, T>;
  type ScreenNavigationProp = Props["navigation"];

  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute<RouteProp<IMainStackScreenParams, T>>();

  return { navigation, route };
};

export default useAppNavigation;
