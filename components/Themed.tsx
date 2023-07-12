/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView } from 'react-native';
import { SafeAreaView as DefaultSafeView, SafeAreaViewProps } from 'react-native-safe-area-context';

import colors from './theme/colors';

export function useThemeColor(
  props: { light?: string; dark?: string; },
  colorName: keyof typeof colors.colors
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors['colors'][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type SafeViewProps = ThemeProps & SafeAreaViewProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'primary');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'light');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SafeView(props: SafeViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'light');

  return <DefaultSafeView style={[{ backgroundColor }, style]} {...otherProps} />;
}