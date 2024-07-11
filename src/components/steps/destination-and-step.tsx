'use client'

import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import Button from '../button'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

interface DestinationAndStepProps {
  isGuestsInputOpen: boolean
  eventStartAndEndDates: DateRange | undefined
  openGuestsInputOpen: () => void
  closeGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export default function DestinationAndStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInputOpen,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d ' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d ' de 'LLL"))
      : null

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          onChange={(event) => setDestination(event.target.value)}
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="w-44 flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex w-56 items-center gap-2 outline-none"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="w-60 flex-1 shrink-0 flex-nowrap text-left text-lg text-zinc-400">
          {displayedDate || 'Quando?'}
        </span>
      </button>

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

      {isDatePickerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2>Selecione a data</h2>
                <button
                  onClick={closeDatePicker}
                  className="group rounded-lg p-2 hover:bg-lime-400"
                  type="button"
                >
                  <X className="size-4 text-zinc-400 group-hover:text-lime-950" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}
    </div>
  )
}
