import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import Button from './button'

export default function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 truncate">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block truncate text-sm text-zinc-400">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="size-5 shrink-0 text-zinc-400" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 truncate">
            <span className="block font-medium text-zinc-100">
              Dr. Rita Pacocha
            </span>
            <span className="block truncate text-sm text-zinc-400">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleCheck className="size-5 shrink-0 text-lime-300" />
        </div>
      </div>

      <Button
        variant="secondary"
        className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700"
      >
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
