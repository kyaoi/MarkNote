import { useEffect, useState } from 'react'
import {
  Content,
  Layout,
  MarkdownEditor,
  NotePreviewList,
  Sidebar,
  ActionButtonsRow
} from './components'
import { NoteInfo } from '@shared/types'

export default function App() {
  const [notes, setNotes] = useState<NoteInfo[]>()
  const [selectNoteIndex, setSelectNoteIndex] = useState<number | undefined>()
  const reloadNotes = async () => {
    setNotes(await window.context.getNotes())
  }
  useEffect(() => {
    reloadNotes()
  })
  return (
    <>
      <Layout>
        <Sidebar>
          <ActionButtonsRow
            className="flex justify-between mt-1"
            notes={notes}
            reloadNotes={reloadNotes}
            selectNoteIndex={selectNoteIndex}
          />
          <NotePreviewList
            className="mt-3 space-y-1"
            notes={notes}
            selectNoteIndex={selectNoteIndex}
            setSelectNoteIndex={setSelectNoteIndex}
          />
        </Sidebar>
        <Content>
          {notes && notes?.length !== 0 && selectNoteIndex !== undefined && (
            <MarkdownEditor currentNote={notes[selectNoteIndex]} />
          )}
        </Content>
      </Layout>
    </>
  )
}
