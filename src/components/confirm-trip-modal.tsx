import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'
import Button from './button'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (onwerName: string) => void
  setOwnerEmail: (onwerEmail: string) => void
}

export default function ConfirmTripModal({
  createTrip,
  closeConfirmTripModal,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Confirmar criação da viagem</h2>
            <button
              onClick={closeConfirmTripModal}
              className="group rounded-lg p-2 hover:bg-lime-400"
              type="button"
            >
              <X className="size-4 text-zinc-400 group-hover:text-lime-950" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <User className="size-5 text-zinc-400" />
            <input
              onChange={(event) => setOwnerName(event.target.value)}
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Mail className="size-5 text-zinc-400" />
            <input
              onChange={(event) => setOwnerEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <Button size="full" type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
