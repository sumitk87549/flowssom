import { ImageBackground, StyleSheet, View } from 'react-native';
export default function BackgroundCanvas({uri,children}:{uri:string;children?:React.ReactNode}){return <ImageBackground source={{uri}} style={StyleSheet.absoluteFill}><View style={s.overlay}/>{children}</ImageBackground>}
const s=StyleSheet.create({overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(0,0,0,0.35)'}});
