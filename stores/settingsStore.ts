import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { BreakTechnique } from '@/constants/techniques';
import { ThemeMode } from '@/constants/themes';
interface SettingsStore { focusMinutes:number; shortBreakMinutes:number; longBreakMinutes:number; cyclesBeforeLongBreak:number; selectedBackground:string; selectedSound:string; floatingType:string; floatingIntensity:number; floatingSpeed:number; breakTechnique:BreakTechnique; volume:number; keepAwake:boolean; requestDnd:boolean; autoStartBreak:boolean; autoStartNext:boolean; themeMode:ThemeMode; load:()=>Promise<void>; update:<K extends keyof Omit<SettingsStore,'load'|'update'>>(k:K,v:SettingsStore[K])=>Promise<void>; }
const KEY='flowssom.settings';
export const useSettingsStore=create<SettingsStore>((set,get)=>({focusMinutes:25,shortBreakMinutes:5,longBreakMinutes:15,cyclesBeforeLongBreak:4,selectedBackground:'dawn',selectedSound:'rain',floatingType:'bubbles',floatingIntensity:3,floatingSpeed:3,breakTechnique:'breathe',volume:0.7,keepAwake:true,requestDnd:false,autoStartBreak:true,autoStartNext:false,themeMode:'dark',load:async()=>{const raw=await AsyncStorage.getItem(KEY);if(raw)set(JSON.parse(raw));},update:async(k,v)=>{set({[k]:v} as never);const s=get();await AsyncStorage.setItem(KEY,JSON.stringify({...s,load:undefined,update:undefined}));}}));
