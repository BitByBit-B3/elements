import { lightTokens, darkTokens, ThemeTokens } from './tokens';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  tokens: ThemeTokens;
}

export const defaultTheme: Theme = {
  mode: 'light',
  tokens: lightTokens,
};

export function setTheme(mode: ThemeMode): Theme {
  const tokens = mode === 'light' ? lightTokens : darkTokens;
  return {
    mode,
    tokens,
  };
}

export function getCurrentTheme(): Theme {
  // In a real implementation, this would read from localStorage or system preference
  return defaultTheme;
}

export function getThemeTokens(): ThemeTokens {
  return getCurrentTheme().tokens;
}

export function isDarkMode(): boolean {
  return getCurrentTheme().mode === 'dark';
}

export function toggleTheme(): Theme {
  const currentTheme = getCurrentTheme();
  const newMode = currentTheme.mode === 'light' ? 'dark' : 'light';
  return setTheme(newMode);
}