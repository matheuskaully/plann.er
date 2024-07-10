import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'
import Button from './button'

interface InviteGuestsModalProps {
  closeGuestModal: () => void
  emailsToInvite: string[]
  AddNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export default function InviteGuestsModal({
  AddNewEmailToInvite,
  emailsToInvite,
  closeGuestModal,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Selecionar convidados</h2>
            <button
              onClick={closeGuestModal}
              type="button"
              className="group rounded-lg p-2 hover:bg-lime-400"
            >
              <X className="size-4 text-zinc-400 group-hover:text-lime-950" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email, index) => {
            return (
              <div
                key={email + index}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  onClick={() => removeEmailFromInvites(email)}
                  type="button"
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            )
          })}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={AddNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex flex-1 items-center gap-2 px-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <Button size="default" type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
