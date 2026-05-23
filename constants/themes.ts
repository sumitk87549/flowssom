export type ThemeMode = 'dark' | 'light' | 'system';
export interface ThemeTokens { bg:string; card:string; text:string; muted:string; accent:string; success:string; warning:string; danger:string; overlay:string; }
export const darkTheme: ThemeTokens = { bg:'#090B12', card:'#151A2DCC', text:'#F5F7FF', muted:'#A9B1D6', accent:'#8AA4FF', success:'#63D9A5', warning:'#FFCB7A', danger:'#FF7D9C', overlay:'rgba(0,0,0,0.35)' };
export const lightTheme: ThemeTokens = { bg:'#F2F5FF', card:'#FFFFFFCC', text:'#121525', muted:'#5E6482', accent:'#5B6CFF', success:'#1E9E68', warning:'#C38721', danger:'#CB2F68', overlay:'rgba(0,0,0,0.22)' };
