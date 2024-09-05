import { useAllNoteData } from '@renderer/providers/AllNotesDataProvider'
import { useState } from 'react'

export const useAllNotesList = () => {
  const { notes, setNotes } = useAllNoteData()

  const handleNoteSelect = (index: number) => async () => {
    setNotes((prev) => prev.map((note, i) => ({ ...note, isActive: i === index })))
  }

  return {
    notes,
    setNotes,
    handleNoteSelect
  }
}
