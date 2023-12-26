import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <View></View>;
}
