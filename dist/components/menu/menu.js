"use strict";
// import React, { useState, useEffect } from "react";
// import { Pressable, View } from "react-native";
// import * as Animatable from "react-native-animatable";
// import { LogMenuConteudo } from "./menu-conteudo";
// import { MenuProps } from "../../types/menu";
// import { styles } from "./styles";
// export function LogMenu({ visible, onClose, ...MenuConteudoProps }: MenuProps) {
//   const [animation, setAnimation] = useState<"slideInLeft" | "slideOutLeft">(
//     "slideOutLeft"
//   );
//   const [shouldRender, setShouldRender] = useState(visible);
//   const menu = MenuConteudoProps;
//   useEffect(() => {
//     if (visible) {
//       setShouldRender(true);
//       setAnimation("slideInLeft");
//     } else {
//       setAnimation("slideOutLeft");
//       setTimeout(() => setShouldRender(false), 300);
//     }
//   }, [visible]);
//   if (!shouldRender) return null;
//   return (
//     <View style={styles.overlay}>
//       <Animatable.View
//         animation={animation}
//         duration={400}
//         style={styles.menuContainer}
//       >
//         <LogMenuConteudo
//           logoUri={menu.logoUri}
//           usuario={menu.usuario}
//           infoStyle={menu.infoStyle}
//           textoStyle={menu.textoStyle}
//           menuFundo={menu.menuFundo}
//           containeFundo={menu.containeFundo}
//           menuBotao={menu.menuBotao}
//           onPressInfo={menu.onPressInfo}
//           onPressSair={() => {
//             menu.onPressSair();
//             onClose();
//           }}
//         />
//       </Animatable.View>
//       <Pressable style={styles.background} onPress={onClose} />
//     </View>
//   );
// }
