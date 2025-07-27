import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, Pressable, FlatList, Modal, TouchableWithoutFeedback, } from "react-native";
import { useCallback, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
export function LogDropdown(_a) {
    var icone = _a.icone, data = _a.data, onChange = _a.onChange, placeholder = _a.placeholder, textoStyle = _a.textoStyle, corDrop = _a.corDrop, corOpcao = _a.corOpcao;
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    var _c = useState(""), value = _c[0], setValue = _c[1];
    var _d = useState(0), dropdownTop = _d[0], setDropdownTop = _d[1];
    var _e = useState(0), dropdownLeft = _e[0], setDropdownLeft = _e[1];
    var _f = useState(0), dropdownWidth = _f[0], setDropdownWidth = _f[1];
    var buttonRef = useRef(null);
    var toggleExpanded = useCallback(function () {
        var _a;
        if (!expanded) {
            // Medir a posição do botão quando for abrir o dropdown
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.measureInWindow(function (x, y, width, height) {
                setDropdownTop(y + height + 5); // 5px de margem
                setDropdownLeft(x);
                setDropdownWidth(width);
                setExpanded(true);
            });
        }
        else {
            setExpanded(false);
        }
    }, [expanded]);
    var onSelect = useCallback(function (item) {
        onChange(item);
        setValue(item.label);
        setExpanded(false);
    }, [onChange]);
    return (_jsxs(View, { children: [_jsxs(Pressable, { ref: buttonRef, style: [styles.button, { backgroundColor: corDrop }], onPress: toggleExpanded, children: [_jsxs(View, { style: { flexDirection: "row", alignItems: "center", gap: 10 }, children: [icone && _jsx(Ionicons, { name: icone, color: textoStyle.color }), _jsx(Text, { style: [styles.text, textoStyle], children: value || placeholder })] }), _jsx(Ionicons, { name: expanded ? "caret-up-outline" : "caret-down-outline" })] }), expanded && (_jsx(Modal, { visible: expanded, transparent: true, animationType: "fade", children: _jsx(TouchableWithoutFeedback, { onPress: function () { return setExpanded(false); }, children: _jsx(View, { style: styles.backdrop, children: _jsx(TouchableWithoutFeedback, { children: _jsx(View, { style: [
                                    styles.options,
                                    {
                                        backgroundColor: corOpcao,
                                        top: dropdownTop,
                                        left: dropdownLeft,
                                        width: dropdownWidth,
                                    },
                                ], children: _jsx(FlatList, { keyExtractor: function (item) { return item.value; }, data: data, renderItem: function (_a) {
                                        var item = _a.item;
                                        return (_jsx(Pressable, { style: styles.optionItem, onPress: function () { return onSelect(item); }, children: _jsx(Text, { style: textoStyle, children: item.label }) }));
                                    }, 
                                    // ItemSeparatorComponent={() => (
                                    //   <View style={styles.separator} />
                                    // )}
                                    showsVerticalScrollIndicator: false }) }) }) }) }) }))] }));
}
