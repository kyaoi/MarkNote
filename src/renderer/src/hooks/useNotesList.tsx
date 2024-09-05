import { useAllNoteData } from '@renderer/providers/AllNotesDataProvider'
import { useState } from 'react'

export const useAllNotesList = () => {
  const { notes, setNotes } = useAllNoteData()

  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number | null>(null)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)
  }

  return {
    notes,
    setNotes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
