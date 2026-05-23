import { PropsWithChildren } from 'react'; import { StyleSheet, View } from 'react-native';
export default function GlassCard({children}:PropsWithChildren){return <View style={styles.card}>{children}</View>;}
const styles=StyleSheet.create({card:{backgroundColor:'rgba(255,255,255,0.12)',borderColor:'rgba(255,255,255,0.2)',borderWidth:1,borderRadius:24,padding:18}});
