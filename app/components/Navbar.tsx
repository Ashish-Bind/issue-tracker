'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bug } from './Icons'

const Navbar = () => {
  const path = usePathname()

  const links = [
    { name: 'Dashboard', href: '/' },
    { name: 'Issues', href: '/issues' },
  ]

  return (
    <nav className="flex justify-between px-8 border-b p-4 border-gray-300">
      <p className="text-xl">
        <Bug />
      </p>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={`font-medium text-base text-zinc-500 hover:text-zinc-900 ${
              path === link.href ? 'underline text-zinc-900' : ''
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
