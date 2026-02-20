import './SiteCard.css'

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
      0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
      -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
      .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
      -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
      c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
      0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
      0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const IconPlay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
)

const BASE = import.meta.env.BASE_URL

function isSafeUrl(url) {
  if (!url) return false
  try {
    const { protocol } = new URL(url)
    return protocol === 'https:' || protocol === 'http:'
  } catch {
    return false
  }
}

function thumbnailSrc(path) {
  if (!path) return null
  if (path.startsWith('http')) return path
  return BASE + path.replace(/^\//, '')
}

export default function SiteCard({ site }) {
  const { title, description, thumbnail, originalUrl, repoUrl, demoUrl } = site
  const imgSrc = thumbnailSrc(thumbnail)

  return (
    <article className="site-card">
      <div className="site-card__thumbnail">
        {imgSrc ? (
          <img src={imgSrc} alt={`${title} のサムネイル`} loading="lazy" />
        ) : (
          <div className="site-card__placeholder">
            <span>{title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="site-card__body">
        <h2 className="site-card__title">{title}</h2>
        <p className="site-card__description">{description}</p>

        <div className="site-card__links">
          {isSafeUrl(originalUrl) && (
            <a href={originalUrl} target="_blank" rel="noopener noreferrer"
              className="site-card__link site-card__link--original" title="模写元サイト">
              <IconGlobe />
              <span>元サイト</span>
            </a>
          )}
          {isSafeUrl(repoUrl) && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer"
              className="site-card__link site-card__link--github" title="GitHubリポジトリ">
              <IconGithub />
              <span>GitHub</span>
            </a>
          )}
          {isSafeUrl(demoUrl) && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer"
              className="site-card__link site-card__link--demo" title="ライブデモ">
              <IconPlay />
              <span>デモ</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
