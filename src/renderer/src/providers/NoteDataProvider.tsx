import { NoteData } from '@shared/types'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

type NoteDataContextType = {
  note: NoteData | null
  setNote: Dispatch<SetStateAction<NoteData | null>>
}

const NoteDataContext = createContext<NoteDataContextType>({
  note: null,
  setNote: () => {}
})

export const NoteDataProvider = ({ children }: { children: ReactNode }) => {
  const [note, setNote] = useState<NoteData | null>(null)
  useEffect(() => {
    console.log('note updated:', note)
  }, [note])

  return <NoteDataContext.Provider value={{ note, setNote }}>{children}</NoteDataContext.Provider>
}

export const useNoteData = () => {
  return useContext(NoteDataContext)
}
