const METRIKA_ID = 112380549;

declare global {
  interface Window {
    ym?: (id: number, method: string, goal?: string) => void;
  }
}

export function reachGoal(goal: string) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(METRIKA_ID, "reachGoal", goal);
  }
}
