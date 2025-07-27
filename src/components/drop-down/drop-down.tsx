import {
  View,
  Text,
  Pressable,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { DropDownProps, OptionItem } from "../../types/drop-down";
import { styles } from "./styles";

export function LogDropdown({
  icone,
  data,
  onChange,
  placeholder,
  textoStyle,
  corDrop,
  corOpcao,
}: DropDownProps) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const buttonRef = useRef<View>(null);

  const toggleExpanded = useCallback(() => {
    if (!expanded) {
      // Medir a posição do botão quando for abrir o dropdown
      buttonRef.current?.measureInWindow((x, y, width, height) => {
        setDropdownTop(y + height + 5); // 5px de margem
        setDropdownLeft(x);
        setDropdownWidth(width);
        setExpanded(true);
      });
    } else {
      setExpanded(false);
    }
  }, [expanded]);

  const onSelect = useCallback(
    (item: OptionItem) => {
      onChange(item);
      setValue(item.label);
      setExpanded(false);
    },
    [onChange]
  );

  return (
    <View>
      <Pressable
        ref={buttonRef}
        style={[styles.button, { backgroundColor: corDrop }]}
        onPress={toggleExpanded}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {icone && <Ionicons name={icone} color={textoStyle.color} />}
          <Text style={[styles.text, textoStyle]}>{value || placeholder}</Text>
        </View>
        <Ionicons name={expanded ? "caret-up-outline" : "caret-down-outline"} />
      </Pressable>

      {expanded && (
        <Modal visible={expanded} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <View style={styles.backdrop}>
              <TouchableWithoutFeedback>
                <View
                  style={[
                    styles.options,
                    {
                      backgroundColor: corOpcao,
                      top: dropdownTop,
                      left: dropdownLeft,
                      width: dropdownWidth,
                    },
                  ]}
                >
                  <FlatList
                    keyExtractor={(item) => item.value}
                    data={data}
                    renderItem={({ item }) => (
                      <Pressable
                        style={styles.optionItem}
                        onPress={() => onSelect(item)}
                      >
                        <Text style={textoStyle}>{item.label}</Text>
                      </Pressable>
                    )}
                    // ItemSeparatorComponent={() => (
                    //   <View style={styles.separator} />
                    // )}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}
