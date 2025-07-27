import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { MenuAbasProps } from "../../types/menu-abas";
import { styles } from "./styles";

export function LogMenuAbas({
  abas,
  abaPadrao,
  barraAbasStyle,
  activeTabStyle,
  textoAbaStyle,
  textoAbaAtivoStyle,
  activeTabTextStyle,
  alternarAba,
}: MenuAbasProps) {
  const [abaAtiva, setAbaAtiva] = useState<string>(
    abaPadrao || abas[1]?.name || ""
  );

  useEffect(() => {
    setAbaAtiva(abaPadrao || abas[1]?.name || "");
  }, [abaPadrao, abas]);

  const pressionarAba = (abaName: string) => {
    setAbaAtiva(abaName);
    alternarAba?.(abaName);
  };

  const renderContent = () => {
    const activeTabComponent = abas.find((aba) => aba.name === abaAtiva);
    if (!activeTabComponent) return null;

    return React.cloneElement(
      activeTabComponent.component as React.ReactElement,
      activeTabComponent.props || {}
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.barraAbas, barraAbasStyle]}>
        {abas.map((aba) => (
          <Pressable
            key={aba.name}
            style={[
              styles.botaoAba,
              abaAtiva === aba.name && [styles.botaoAbaAtivo, activeTabStyle],
            ]}
            onPress={() => pressionarAba(aba.name)}
          >
            <Text
              style={[
                textoAbaStyle,
                abaAtiva === aba.name && [
                  textoAbaAtivoStyle,
                  activeTabTextStyle,
                ],
              ]}
            >
              {aba.name}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.conteudo}>{renderContent()}</View>
    </View>
  );
}
