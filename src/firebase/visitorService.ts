// Visitor count persistence service with local fallback
export async function getAndIncrementVisitorCount(): Promise<number> {
  try {
    const key = 'portfolio_visitor_count';
    const current = parseInt(localStorage.getItem(key) || '1420', 10);
    const updated = current + 1;
    localStorage.setItem(key, updated.toString());
    return updated;
  } catch {
    return 1421;
  }
}
