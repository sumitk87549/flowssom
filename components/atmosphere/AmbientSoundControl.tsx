import { ScrollView, Text, Pressable } from 'react-native'; import { ambientSounds } from '@/constants/environments';
export default function AmbientSoundControl({onSelect}:{onSelect:(id:string)=>void}){return <ScrollView horizontal>{ambientSounds.map(s=><Pressable key={s.id} onPress={()=>onSelect(s.id)}><Text style={{color:'white',margin:8}}>{s.name}</Text></Pressable>)}</ScrollView>}
