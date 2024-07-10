import { ArrowRight, UserRoundPlus } from 'lucide-react'

interface InviteGuestsStepProps {
  openGuestModal: () => void
  openConfirmTripModal: () => void
  emailsToInvite: string[]
}

export default function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <button
          type="button"
          onClick={openGuestModal}
          className="flex flex-1 items-center gap-2 text-left"
        >
          <UserRoundPlus className="size-5 text-zinc-400" />
          {emailsToInvite.length > 0 ? (
            <span className="text-zinc-100">
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="flex-1 text-lg text-zinc-400">
              Quem estará na viagem?
            </span>
          )}
        </button>
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      <button
        onClick={openConfirmTripModal}
        type="button"
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  )
}
