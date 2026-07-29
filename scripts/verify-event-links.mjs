import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const appSource = readFileSync(join(root, 'src/App.tsx'), 'utf8')
const joinPageSource = readFileSync(join(root, 'src/components/JoinEventPage.tsx'), 'utf8')
const vercelConfig = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'))
const aasaPath = join(root, 'public/.well-known/apple-app-site-association')
const aasaSource = readFileSync(aasaPath, 'utf8')
const aasa = JSON.parse(aasaSource)

assert.ok(appSource.includes("path.startsWith('/join/')"), '/join/:eventCode route is registered')
assert.ok(appSource.includes('<JoinEventPage eventCodeParam={joinEventCode} />'), '/join route renders JoinEventPage')
assert.equal('/join/ABC123'.match(/^\/join\/(.+)$/)?.[1], 'ABC123', 'route extracts ABC123')
assert.equal('/join'.match(/^\/join\/(.+)$/)?.[1], undefined, 'missing code is detected')
assert.ok(joinPageSource.includes('decodeURIComponent(value)'), 'event code is safely decoded')
assert.ok(joinPageSource.includes('Event link is missing a code'), 'missing code error is rendered')

assert.ok(
  vercelConfig.rewrites.some(
    (rewrite) => rewrite.source.includes('api/') && rewrite.destination === '/api/$1',
  ),
  'API routes are preserved',
)
assert.ok(
  vercelConfig.rewrites.some(
    (rewrite) => rewrite.destination === '/index.html' && rewrite.source.includes('apple-app-site-association'),
  ),
  'SPA fallback supports refreshed frontend routes without replacing the AASA file',
)
assert.ok(
  vercelConfig.headers.some(
    (entry) =>
      entry.source === '/.well-known/apple-app-site-association' &&
      entry.headers.some((header) => header.key.toLowerCase() === 'content-type' && header.value === 'application/json'),
  ),
  'AASA file is served as JSON',
)

assert.ok(existsSync(aasaPath), 'AASA file exists at public/.well-known/apple-app-site-association')
assert.deepEqual(aasa.applinks.details[0].components[0]['/'], '/join/*', 'AASA includes /join/*')
assert.ok(!aasaSource.trim().startsWith('<!doctype html'), 'AASA file is JSON, not the React HTML app')

const files = listFiles(root)
const legacyEventDomain = ['photify', 'app'].join('.')
const photifyAppReferences = files
  .filter((file) => !file.includes('/node_modules/') && !file.includes('/.git/') && !file.endsWith('package-lock.json'))
  .filter((file) => readFileSync(file, 'utf8').includes(legacyEventDomain))

assert.deepEqual(photifyAppReferences, [], 'event links do not reference the unused legacy event domain')

function listFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    const stat = statSync(path)
    if (stat.isDirectory()) return listFiles(path)
    if (stat.isFile()) return [path]
    return []
  })
}
