export type Modes = "rpg" | "survi"
export type TypesLeaderBoard = "kill" | "kd" | "maxstreak" | "elo" | "level" | "koth"


interface UserProfile{
    uuid: string,
    lastNickname: string,
    lastServer: string | null,
    lastSeen: Date,
    firstSeen: Date,
    premiumId: string | null,
    primaryGroup: string,
    skinUUID: string | null
}
export interface LeaderboardEntry {
    rank: number;
    userProfile: UserProfile,
    value: number;
    dailyDelta: number;
    dailyLastTotal: number;
    dailyTimestamp: number;
  }
  
export interface LeaderboardResponse {
    success: boolean;
    data: LeaderboardEntry[];
    count: number;
    timestamp: string;
}

export interface LeaderBoardParams{
    mode: Modes,
    type: TypesLeaderBoard
}