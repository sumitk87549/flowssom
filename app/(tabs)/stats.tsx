import { SafeAreaView, Text } from 'react-native'; import { useStatsStore } from '@/stores/statsStore';
export default function Stats(){const s=useStatsStore();return <SafeAreaView style={{flex:1,backgroundColor:'#090B12',padding:20}}><Text style={{color:'white',fontSize:28}}>Your focus, reflected.</Text><Text style={{color:'white',marginTop:16}}>Sessions: {s.sessions}</Text></SafeAreaView>}
