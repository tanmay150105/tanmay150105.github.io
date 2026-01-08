import { Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 text-center" style={{ background: 'var(--deep-navy)' }}>
      <p style={{ color: 'var(--light-gray)', fontSize: '1.05rem' }}>
        &copy; {currentYear} Tanmay Jain. Made with curiosity and lots of coffee{' '}
        <Coffee size={16} style={{ color: 'var(--primary-mint)', verticalAlign: 'middle' }} />
      </p>
    </footer>
  );
}