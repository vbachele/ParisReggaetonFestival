export const colors = {
  // Brand Colors
  primary: {
    gold: '#f5c78e',
    goldLight: '#f5e6c3',
    goldDark: '#f0d4a3',
  },
  // Text Colors
  text: {
    primary: '#4323FC',
    secondary: '#000000',
  },
  // Background Colors
  background: {
    primary: '#f5c78e',
    secondary: '#ffffff',
    tertiary: '#f5f5f5',
  },
} as const;

// Type for the colors object
export type ColorSystem = typeof colors; 