'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'
import InviteGuestsModal from '@/components/invite-guests-modal'
import ConfirmTripModal from '@/components/confirm-trip-modal'
import DestinationAndStep from '@/components/steps/destination-and-step'
import InviteGuestsStep from '@/components/steps/invite-guests-step'

export default function Home() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState<boolean>(false)
  const [isConfirmModalTripOpen, setIsConfirmModalTripOpen] =
    useState<boolean>(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    'matheus.rosa@rocketseat.com.br',
    'nicole.xavier@rocketseat.com.br',
    'rocket@admin.com.br',
  ])
  const router = useRouter()

  function openGuestsInputOpen() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestModal() {
    setIsGuestModalOpen(true)
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmModalTripOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmModalTripOpen(false)
  }

  function AddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push('/trip/123')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <Image src={logo} alt="plann.er" className="mx-auto" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndStep
            closeGuestsInput={closeGuestsInput}
            openGuestsInputOpen={openGuestsInputOpen}
            isGuestsInputOpen={isGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestModal={openGuestModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{' '}
          <Link href={'#'} className="text-zinc-300 underline">
            termos de uso
          </Link>{' '}
          e{' '}
          <Link href={'#'} className="text-zinc-300 underline">
            políticas de privacidade
          </Link>
          .
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestsModal
          AddNewEmailToInvite={AddNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          closeGuestModal={closeGuestModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmModalTripOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          closeConfirmTripModal={closeConfirmTripModal}
        />
      )}
    </div>
  )
}
