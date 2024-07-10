import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import Button from '../button'

interface DestinationAndStepProps {
  isGuestsInputOpen: boolean
  openGuestsInputOpen: () => void
  closeGuestsInput: () => void
}

export default function DestinationAndStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInputOpen,
}: DestinationAndStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="w-36 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInputOpen} type="button">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
