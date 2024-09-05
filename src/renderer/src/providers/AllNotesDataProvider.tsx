import { NoteInfo } from '@shared/types'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type AllNoteDataContextType = {
  notes: NoteInfo[]
  setNotes: Dispatch<SetStateAction<NoteInfo[]>>
}

const randomNote = () => {
  return {
    title: `test${Math.random()}`,
    lastEditTime: Number(new Date()),
    isActive: false
  }
}

const AllNoteDataContext = createContext<AllNoteDataContextType>({
  // TODO: ここでMarkNoteというフォルダに入っているファイルのみを取得して表示するように変更
  notes: [...Array(5).keys()].map(randomNote),
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
