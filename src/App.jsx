import SiteCard from './components/SiteCard'
import sites from './data/sites'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <h1 className="header__title">模写サイト集</h1>
          <p className="header__subtitle">コーディング練習で作った模写サイトのまとめ</p>
          <span className="header__count">{sites.length} sites</span>
        </div>
      </header>

      <main className="main">
        <div className="grid">
          {sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Built with React + Vite · Hosted on GitHub Pages</p>
      </footer>
    </div>
  )
}
