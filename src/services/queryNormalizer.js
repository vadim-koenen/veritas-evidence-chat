/**
 * QUERY NORMALIZATION & ENTITY EXTRACTION ENGINE
 * Cleans natural language user hypotheses into optimized MeSH/SEC query parameters.
 */

export function normalizeQueryForApis(userQueryText) {
  if (!userQueryText) return { cleanQuery: '', keywords: [] };

  const stopWords = new Set(['does', 'is', 'a', 'the', 'for', 'in', 'and', 'or', 'to', 'of', 'with', 'by', 'at', 'an', 'on', 'will', 'before', 'after', 'can']);
  
  // Extract key technical/clinical terms
  const words = userQueryText
    .replace(/[^\w\s]/gi, '')
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.has(w.toLowerCase()));

  // Take top 3 most relevant keywords for REST search
  const cleanQuery = words.slice(0, 3).join(' ');

  return {
    original: userQueryText,
    cleanQuery: cleanQuery || userQueryText,
    keywords: words
  };
}
