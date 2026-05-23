const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; export const generateRoomCode=()=>Array.from({length:6},()=>chars[Math.floor(Math.random()*chars.length)]).join('');
