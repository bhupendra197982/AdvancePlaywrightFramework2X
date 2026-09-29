/**
 * Self-Heal (Locator Repair)
 * Stub implementation for locator repair tracking
 */

export interface HealReport {
  locator: string;
  intent: string;
  candidates: Array<{
    selector: string;
    score: number;
    verified: boolean;
  }>;
}
