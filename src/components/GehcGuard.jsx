import { Navigate } from 'react-router-dom'

export default function GehcGuard({ children }) {
  if (sessionStorage.getItem('gehc_auth') !== 'true') {
    return <Navigate to="/work" replace />
  }
  return children
}
