# Logicom UI Kit

O Logicom UI Kit é uma biblioteca de componentes de interface de usuário (UI) para React Native, projetada para acelerar o desenvolvimento de seus aplicativos. Ele oferece um conjunto de componentes prontos para uso, totalmente estilizáveis e fáceis de integrar.

## Instalação

Para instalar o Logicom UI Kit, use o seu gerenciador de pacotes preferido:

```bash
npm install logicom-ui-kit
# ou
yarn add logicom-ui-kit
```

## Componentes Disponíveis

O Logicom UI Kit oferece uma variedade de componentes para atender às suas necessidades de desenvolvimento:

*   `LogBotao`
*   `LogBotaoFlutuante`
*   `LogBotaoIcone`
*   `LogCampoTexto`
*   `LogCampoTextoIcone`
*   `LogCampoTextoMulti`
*   `LogCarregamento`
*   `LogCartaoCompleto`
*   `LogCartaoInterativo`
*   `LogCartaoSimples01`
*   `LogCartaoSimples02`
*   `LogMenuAbas`
*   `LogModalCampoTexto`
*   `LogTabela`

## Sistema de Temas

O Logicom UI Kit vem com um sistema de temas flexível que permite personalizar a aparência dos componentes para combinar com a identidade visual do seu projeto.

### Usando Temas

O Logicom UI Kit permite que você use os temas padrão (claro e escuro) ou forneça seus próprios temas personalizados.

#### 1. (Opcional) Crie seus Temas Personalizados

No seu projeto, crie um arquivo para definir as cores dos seus temas. Por exemplo, `src/meu-tema.ts`:

```tsx
// src/meu-tema.ts
import type { Theme } from 'logicom-ui-kit';

export const meuLightTheme: Theme = {
  primary: '#ff6f00', // Laranja
  secondary: '#1976d2', // Azul
  background: '#f5f5f5',
  surface: '#ffffff',
  error: '#d32f2f',
  text: '#212121',
  onPrimary: '#ffffff',
  onSecondary: '#ffffff',
  onBackground: '#212121',
  onSurface: '#212121',
  onError: '#ffffff',
};

export const meuDarkTheme: Theme = {
  primary: '#ffa726', // Laranja mais claro
  secondary: '#64b5f6', // Azul mais claro
  background: '#121212',
  surface: '#212121',
  error: '#ef5350',
  text: '#ffffff',
  onPrimary: '#000000',
  onSecondary: '#000000',
  onBackground: '#ffffff',
  onSurface: '#ffffff',
  onError: '#000000',
};
```

#### 2. Configure o `ThemeProvider`

No arquivo principal do seu aplicativo (geralmente `App.tsx`), envolva seu aplicativo com o `ThemeProvider`. Passe seus temas personalizados para as propriedades `light` e `dark`.

Se você não fornecer nenhum tema, os temas padrão da biblioteca serão usados.

```tsx
// App.tsx
import React from 'react';
import { ThemeProvider } from 'logicom-ui-kit';
import { meuLightTheme, meuDarkTheme } from './src/meu-tema'; // Importe seus temas
import { MeuApp } from './src/MeuApp'; // Seu componente principal

export default function App() {
  return (
    <ThemeProvider light={meuLightTheme} dark={meuDarkTheme}>
      <MeuApp />
    </ThemeProvider>
  );
}
```

### Alternando entre Temas

Para alternar entre os temas claro e escuro, você pode usar a função `toggleTheme` fornecida pelo hook `useTheme`.

Veja um exemplo de como criar um botão para alternar o tema:

```tsx
import React from 'react';
import { View, Button } from 'react-native';
import { useTheme } from 'logicom-ui-kit';

export function BotaoAlternarTema() {
  const { toggleTheme } = useTheme();

  return (
    <View>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
}
```

### Usando o Tema nos Componentes

Para acessar as cores do tema em seus componentes, use o hook `useTheme`:

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'logicom-ui-kit';

export function ComponenteComTema() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.primary }}>
        Este texto usa a cor primária do tema!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

## Exemplo de Uso de Componente

Veja como usar o componente `LogBotao`:

```tsx
import React from 'react';
import { View } from 'react-native';
import { LogBotao } from 'logicom-ui-kit';

export function ExemploBotao() {
  return (
    <View>
      <LogBotao title="Clique Aqui" onPress={() => alert('Botão clicado!')} />
    </View>
  );
}
```