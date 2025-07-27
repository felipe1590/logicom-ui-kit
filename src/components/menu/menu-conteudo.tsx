import { View, ScrollView } from "react-native";
import { MenuConteudoProps } from "../../types/menu-conteudo";
import { LogMenuBotao } from "./menu-botao";
import { LogMenuInfo } from "./menu-info";
import { styles } from "./styles";

export function LogMenuConteudo({
  logoUri,
  usuario,
  infoStyle,
  textoStyle,
  menuFundo,
  containeFundo,
  menuBotao,
  onPressInfo,
  onPressSair,
}: MenuConteudoProps) {
  return (
    <View style={[styles.menuConteudo, { backgroundColor: menuFundo }]}>
      <LogMenuInfo
        infoStyle={infoStyle}
        usuario={usuario}
        logoUri={logoUri}
        onPress={onPressInfo}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.conteudoContainer,
          { backgroundColor: containeFundo },
        ]}
      >
        <View style={{ marginTop: 8 }}>
          {menuBotao.map((item, index) => (
            <LogMenuBotao
              key={index}
              onPress={item.onPress}
              titulo={item.titulo}
              icone={item.icone}
              textoStyle={textoStyle}
            />
          ))}
        </View>
      </ScrollView>
      <LogMenuBotao
        onPress={() => onPressSair()}
        titulo="Sair"
        icone={"exit-outline"}
        textoStyle={textoStyle}
      />
    </View>
  );
}
