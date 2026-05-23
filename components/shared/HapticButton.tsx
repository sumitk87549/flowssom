import * as Haptics from 'expo-haptics'; import { Pressable, Text, StyleSheet } from 'react-native';
export default function HapticButton({label,onPress}:{label:string;onPress:()=>void}){return <Pressable style={s.b} onPress={()=>{void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);onPress();}}><Text style={s.t}>{label}</Text></Pressable>}
const s=StyleSheet.create({b:{padding:14,backgroundColor:'#8AA4FF',borderRadius:999,alignItems:'center'},t:{color:'#fff',fontWeight:'700'}});
