import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to dashboard when user visits the root URL
  redirect('/register')
}