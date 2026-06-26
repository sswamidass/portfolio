import Layout from '../Layout'

export default function CaseStudyLayout({ children }) {
  return (
    <Layout>
      <div className="page-container page-content">
        {children}
      </div>
    </Layout>
  )
}
