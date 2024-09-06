import { NotePreview } from '@/components'
import { NoteInfo } from '@shared/types'
import { isEmpty } from 'lodash'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
  notes?: NoteInfo[]
  selectNoteIndex?: number
  setSelectNoteIndex: (index: number) => void
}

export const NotePreviewList = ({
  onSelect,
  notes,
  selectNoteIndex,
  setSelectNoteIndex,
  className,
  ...props
}: NotePreviewListProps) => {
  const handleNoteSelect = (index: number) => async () => {
    setSelectNoteIndex(index)
  }

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
