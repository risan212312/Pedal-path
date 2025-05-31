import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Pressable } from 'react-native';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Pressable onPress={() => WebBrowser.openBrowserAsync(href)}>
      {children}
    </Pressable>
  );
} 