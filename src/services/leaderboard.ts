import {
  type LeaderboardEntry,
  type LeaderBoardParams,
  type LeaderboardResponse,
} from "@/utils";
import { API_RPG, API_SURVI } from "astro:env/server";

export async function getLeaderboard({
  mode,
  type,
}: LeaderBoardParams): Promise<LeaderboardEntry[]> {
  try {
    const defaultUrl =
      mode === "rpg" ? `${API_RPG}?type=${type}` : `${API_SURVI}?type=${type}`;

    const response = await fetch(defaultUrl);
    const result: LeaderboardResponse = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    return [];
  }
}
