import TopNav from '../TopNav'

export default function HomeLayout({ children }) {
  return (
    <div id="portfolio-page-full">
      <TopNav />
      {children}
    </div>
  )
}
