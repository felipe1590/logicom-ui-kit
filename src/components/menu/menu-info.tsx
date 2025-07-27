import { View, Text, Pressable, Image } from "react-native";
import { MenuInfoProps } from "../../types/menu-info";
import { styles } from "./styles";

export function LogMenuInfo({
  usuario,
  logoUri,
  infoStyle,
  ...rest
}: MenuInfoProps) {
  return (
    <Pressable {...rest} style={styles.menuInfo}>
      <View style={styles.menuImageViwer}>
        <Image source={logoUri} style={styles.menuImage} resizeMode="contain" />
      </View>
      <View>
        <Text style={infoStyle}>
          {usuario.codigo} - {usuario.nome}
        </Text>
        <Text style={infoStyle}>{usuario.fantasia}</Text>
        <Text style={infoStyle}>{usuario.cnpj}</Text>
      </View>
    </Pressable>
  );
}
