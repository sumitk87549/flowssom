import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
export interface JournalEntry{date:string;text:string}
interface StatsStore { dailyMinutes:Record<string,number>; sessions:number; streak:number; lastSessionDate?:string; journal:JournalEntry[]; addSession:(date:string,minutes:number)=>Promise<void>; addJournal:(text:string)=>Promise<void>; load:()=>Promise<void>; }
const KEY='flowssom.stats';
export const useStatsStore=create<StatsStore>((set,get)=>({dailyMinutes:{},sessions:0,streak:0,journal:[],load:async()=>{const raw=await AsyncStorage.getItem(KEY);if(raw)set(JSON.parse(raw));},addSession:async(date,minutes)=>{set(s=>({dailyMinutes:{...s.dailyMinutes,[date]:(s.dailyMinutes[date]??0)+minutes},sessions:s.sessions+1,lastSessionDate:date,streak:s.lastSessionDate===date?s.streak:s.streak+1}));await AsyncStorage.setItem(KEY,JSON.stringify(get()));},addJournal:async(text)=>{set(s=>({journal:[{date:new Date().toISOString(),text},...s.journal]}));await AsyncStorage.setItem(KEY,JSON.stringify(get()));}}));
