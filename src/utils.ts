export type Modes = "rpg" | "survival"
export type TypesLeaderBoardRPG = "kills" | "kd" | "maxstreak" | "elo" | "level" | "koth"
export type TypesLeaderBoardSurvival = "kills" | "kd" | "maxstreak" | "elo" | "koth"
export type TypesLeaderBoardGlobal = TypesLeaderBoardRPG | TypesLeaderBoardSurvival


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
    type: TypesLeaderBoardGlobal,
    limit?: number,
    offset?: number,
}

export const typeLabels = {
    kills: "Kills",
    kd: "K/D",
    maxstreak: "Mayor Racha",
    elo: "ELO",
    level: "Nivel",
    koth: "KOTHs"
  };