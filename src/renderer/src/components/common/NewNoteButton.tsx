import { ActionButton, ActionButtonProps } from '@/components'
import { LuFileSignature } from 'react-icons/lu'

type NewNoteButtonProps = ActionButtonProps & { reloadNotes: () => void }

export const NewNoteButton = ({ reloadNotes, ...props }: NewNoteButtonProps) => {
  const handleCreation = async () => {
    await window.context.createNote()
    reloadNotes()
  }
  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
