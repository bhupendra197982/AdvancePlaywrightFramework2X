/**
 * Flaky Test Analyzer
 * Stub implementation for build-to-build test comparison
 */

export interface BuildSummary {
  runId: string;
  tests: Record<string, 'passed' | 'failed' | 'skipped'>;
}

export interface FlakyResult {
  counts: {
    flaky: number;
    failing: number;
    total: number;
  };
  flaky: string[];
  summary?: string;
}

export async function analyzeFlaky(
  _prev: BuildSummary,
  _curr: BuildSummary,
  _hasApiKey: boolean,
): Promise<FlakyResult> {
  // Stub implementation - returns empty flaky analysis
  return {
    counts: { flaky: 0, failing: 0, total: 0 },
    flaky: [],
    summary: 'Flaky analysis not configured',
  };
}
