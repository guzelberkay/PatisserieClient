
const navItems = [
  { href: '#products', label: 'Ürünlerimiz' },
  { href: '#about', label: 'Hakkımızda' },
  { href: '#contact', label: 'İletişim' },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="text-amber-900 hover:text-amber-700">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}