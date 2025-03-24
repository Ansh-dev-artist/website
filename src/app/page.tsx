import { Metadata } from 'next';
import Home from './Home';

// Add metadata for better SEO
export const metadata: Metadata = {
  title: 'iGame Center - Colorful Gaming Solutions',
  description: 'iGame Center is Colorful\'s flagship gaming software ecosystem, designed to enhance your gaming experience with cutting-edge monitoring, optimization, and customization tools.'
};

export default function HomePage() {
  return <Home />;
}
