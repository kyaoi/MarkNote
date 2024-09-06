import { DeleteNoteButton, NewNoteButton } from '@/components'
import { NoteInfo } from '@shared/types'
import { ComponentProps } from 'react'

type ActionButtonRowProps = ComponentProps<'div'> & {
  notes?: NoteInfo[]
  reloadNotes: () => void
  selectNoteIndex?: number
}

export const ActionButtonsRow = ({
  notes,
  reloadNotes,
  selectNoteIndex,
  ...props
}: ActionButtonRowProps) => {
  return (
    <div {...props}>
      <NewNoteButton reloadNotes={reloadNotes} />
      <DeleteNoteButton notes={notes} reloadNotes={reloadNotes} selectNoteIndex={selectNoteIndex} />
    </div>
  )
}
