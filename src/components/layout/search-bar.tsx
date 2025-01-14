import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SearchInput } from "@/src/components/ui/search-input"

export function SearchBar() {
  return (
    <div className="w-full bg-[#2F7DA2] py-3">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px] rounded-b-none sm:rounded-r-none border-b-0 sm:border-b sm:border-r-0 bg-white text-sm">
              <SelectValue placeholder="Categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="perros">Perros</SelectItem>
              <SelectItem value="gatos">Gatos</SelectItem>
              <SelectItem value="aves">Aves</SelectItem>
              <SelectItem value="peces">Peces</SelectItem>
            </SelectContent>
          </Select>
          <SearchInput 
            placeholder="¿Qué estás buscando?" 
            className="w-full sm:w-[200px] rounded-t-none sm:rounded-l-none h-[38px] text-sm"
          />
        </div>
      </div>
    </div>
  )
}

