import * as Haptics from 'expo-haptics'; export const useHaptics=()=>({light:()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)});
