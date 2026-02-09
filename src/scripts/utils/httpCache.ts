type CacheEntry<T> = {
  data: T
  expiresAt: number
}

export async function cachedFetch<T>(
  key: string,
  url: string,
  options?: RequestInit,
  ttlMs = 24 * 60 * 60 * 1000 // 24h
): Promise<T> {
  const raw = localStorage.getItem(key)

  if (raw) {
    try {
      const entry: CacheEntry<T> = JSON.parse(raw)

      if (Date.now() < entry.expiresAt) {
        console.log('[cache] hit:', key)
        return entry.data
      } else {
        console.log('[cache] expired:', key)
        localStorage.removeItem(key)
      }
    } catch {
      localStorage.removeItem(key)
    }
  }

  console.log('[cache] miss:', key)

  const res = await fetch(url, options)
  if (!res.ok) throw new Error('HTTP error')

  const data = await res.json()

  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      expiresAt: Date.now() + ttlMs,
    })
  )

  return data
}
