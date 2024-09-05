import { ActionButton, ActionButtonProps } from '@/components'
import { useAllNotesList } from '@renderer/hooks/useNotesList'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const { setNotes } = useAllNotesList()

  const handleCreation = async () => {
    setNotes((prev) => [
      ...prev,
      {
        title: 'New Note',
        lastEditTime: Number(new Date()),
        isActive: false
      }
    ])
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
