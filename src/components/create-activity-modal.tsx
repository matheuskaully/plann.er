import { Calendar, Tag, X } from 'lucide-react'
import Button from './button'

interface CreateActivityModalProps {
  closeCreateActivityModalOpen: () => void
}

export default function CreateActivityModal({
  closeCreateActivityModalOpen,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Cadastrar atividade</h2>
            <button
              onClick={closeCreateActivityModalOpen}
              type="button"
              className="group rounded-lg p-2 hover:bg-lime-400"
            >
              <X className="size-4 text-zinc-400 group-hover:text-lime-950" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Qual a atividade?"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Calendar className="size-5 shrink-0 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <Button size="full" type="submit">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
