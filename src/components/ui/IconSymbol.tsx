// Fallback for using MaterialIcons on Android and web.

import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

type IconMapping = Record<string, string>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as IconMapping;

type IconProps = ComponentProps<typeof MaterialIcons>;

/**
 * An icon component that uses Material Icons.
 * See available icons at: https://icons.expo.fyi/MaterialIcons
 */
export function IconSymbol({ name, ...props }: IconProps) {
  return <MaterialIcons name={name} {...props} />;
}
