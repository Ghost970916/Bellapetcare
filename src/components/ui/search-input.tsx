import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        className={`pl-3 pr-10 ${className}`}
        {...props}
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>
  )
}

