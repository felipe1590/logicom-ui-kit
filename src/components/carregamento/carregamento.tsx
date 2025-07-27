import { ImageSourcePropType, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";

export function LogCarregamento(gif: ImageSourcePropType | undefined) {
  return (
    <View style={styles.container}>
      <Image source={gif} style={styles.imagem} contentFit="cover" />
    </View>
  );
}
