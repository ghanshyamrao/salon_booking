import { Button } from '../ui/button'
import { LayoutGrid, Rows3 } from 'lucide-react'

const ViewModeToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
      <Button
        type="button"
        variant={viewMode === 'grid' ? 'primary' : 'ghost'}
        size="icon"
        className={`h-8 w-8 ${viewMode === 'grid' ? 'bg-pink-100 text-[#B56584] hover:bg-pink-[#B56584]' : 'hover:bg-gray-200'}`}
        onClick={() => setViewMode('grid')}
        aria-label="Grid view"
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant={viewMode === 'row' ? 'primary' : 'ghost'}
        size="icon"
        className={`h-8 w-8 ${viewMode === 'row' ? 'bg-pink-100 text-[#B56584] hover:bg-pink-[#B56584]' : 'hover:bg-gray-200'}`}
        onClick={() => setViewMode('row')}
        aria-label="Row view"
      >
        <Rows3 className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default ViewModeToggle

