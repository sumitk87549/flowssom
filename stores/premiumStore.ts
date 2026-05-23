import { create } from 'zustand';
export interface PremiumStore { isPremium:boolean; premiumSource:'none'|'subscription'|'lifetime'|'promotional'; checkPremiumStatus:()=>Promise<void>; setPremium:(s:PremiumStore['premiumSource'])=>void; }
export const usePremiumStore=create<PremiumStore>((set)=>({isPremium:false,premiumSource:'none',checkPremiumStatus:async()=>{},setPremium:(source)=>set({isPremium:source!=='none',premiumSource:source})}));
