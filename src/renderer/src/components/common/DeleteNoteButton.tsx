import { ActionButton, ActionButtonProps } from '@/components'
import { NoteInfo } from '@shared/types'
import { FaRegTrashCan } from 'react-icons/fa6'

type DeleteNoteButtonProps = ActionButtonProps & {
  notes?: NoteInfo[]
  reloadNotes: () => void
  selectNoteIndex?: number
}

export const DeleteNoteButton = ({
  notes,
  reloadNotes,
  selectNoteIndex,
  ...props
}: DeleteNoteButtonProps) => {
  if (!notes || selectNoteIndex === undefined) return null
  const handleDelete = async () => {
    await window.context.deleteNote(notes[selectNoteIndex].title)
    reloadNotes()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
