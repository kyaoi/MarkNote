import { ActionButton, ActionButtonProps } from '@/components'
import { useAllNotesList } from '@renderer/hooks/useNotesList'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const { setNotes } = useAllNotesList()

  const handleDelete = async () => {
    setNotes((prev) => prev.filter((note) => !note.isActive))
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
