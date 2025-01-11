import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface CategoryIconProps {
  icon: LucideIcon
  href: string
  label: string
}

export function CategoryIcon({ icon: Icon, href, label }: CategoryIconProps) {
  return (
    <Link 
      href={href}
      className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-4 rounded-full">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <span className="text-xs text-gray-600 mt-1">{label}</span>
    </Link>
  )
}

