'use client'

import { X } from 'lucide-react'

export default function InviteModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Selecionar convidados</h2>
            <button type="button">
              <X className="size-4 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
            <span className="text-zinc-300">matheuskaully@gmail.com</span>
            <button type="button">
              <X className="size-4 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
