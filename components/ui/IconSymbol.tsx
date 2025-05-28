// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import type { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconSymbolName =
  | 'house.fill'
  | 'person.2.fill'
  | 'paperplane.fill'
  | 'chevron.left.forwardslash.chevron.right'
  | 'chevron.right'
  | 'index'
  | 'rectangle.grid.2x2.fill';

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'person.2.fill': 'group', // Changed community icon to 'groups'
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'index': 'dashboard', // Added icon for index tab
  'rectangle.grid.2x2.fill': 'dashboard', // Dashboard icon for index tab
} as const;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  // If the color is white or nearly white, use a fallback color for visibility
  let safeColor = color;
  if (typeof color === 'string' && (color === '#fff' || color === '#ffffff' || color.toLowerCase() === 'white')) {
    safeColor = '#222'; // fallback to dark color for visibility
  }
  // Always use the Material icon name, fallback to 'help' if not mapped
  const iconName = MAPPING[name as keyof typeof MAPPING] || 'help';
  return <MaterialIcons color={safeColor} size={size} name={iconName as ComponentProps<typeof MaterialIcons>["name"]} style={style} />;
}
