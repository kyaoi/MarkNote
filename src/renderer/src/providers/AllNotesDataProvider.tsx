import { NoteInfo } from '@shared/types'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type AllNoteDataContextType = {
  notes: NoteInfo[]
  setNotes: Dispatch<SetStateAction<NoteInfo[]>>
}

const AllNoteDataContext = createContext<AllNoteDataContextType>({
  notes: [
    {
      title: 'test',
      lastEditTime: Number(new Date())
    },
    {
      title: 'test2',
      lastEditTime: Number(new Date()),
      isActive: true
    }
  ],
  setNotes: () => {}
})

export const AllNoteDataProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NoteInfo[]>([])

  return (
    <AllNoteDataContext.Provider value={{ notes, setNotes }}>
      {children}
    </AllNoteDataContext.Provider>
  )
}

export const useAllNoteData = () => {
  return useContext(AllNoteDataContext)
}
