'use client'

import Activities from '@/components/activities'
import Button from '@/components/button'
import CreateActivityModal from '@/components/create-activity-modal'
import DestinationAndDateHeader from '@/components/destination-and-date-header'
import Guests from '@/components/guests'
import ImportantLinks from '@/components/important-links'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export default function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState<boolean>(false)

  function openCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button
              onClick={openCreateActivityModalOpen}
              variant="primary"
              type="button"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModalOpen={closeCreateActivityModalOpen}
        />
      )}
    </div>
  )
}
