import { MDXEditorMethods } from '@mdxeditor/editor'
import { autoSavingTime } from '@shared/constants'
import { NoteContent, NoteInfo } from '@shared/types'
import { throttle } from 'lodash'
import { useEffect, useRef, useState } from 'react'

export const useMarkdownEditor = (currentNote: NoteInfo) => {
  const [note, setNote] = useState<{
    title: string
    content: NoteContent
    lastEditTime: number
  }>({
    title: currentNote.title,
    content: '',
    lastEditTime: currentNote.lastEditTime
  })

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const loadNoteContent = async () => {
      try {
        const content = await window.context.readNote(currentNote.title)
        setNote({
          title: currentNote.title,
          content,
          lastEditTime: currentNote.lastEditTime
        })
        setIsReady(true)
      } catch (error) {
        console.error('Error loading note content:', error)
      }
    }
    loadNoteContent()
  }, [currentNote])

  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      setNote((prevNote) => ({
        ...prevNote,
        content,
        lastEditTime: Number(new Date())
      }))
      try {
        await window.context.writeNote(currentNote.title, content)
        console.log('Completed auto saving')
      } catch (error) {
        console.error('Error auto saving note:', error)
      }
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      setNote((prevNote) => ({
        ...prevNote,
        content,
        lastEditTime: Number(new Date())
      }))
      try {
        await window.context.writeNote(currentNote.title, content)
        console.log('Completed blur saving')
      } catch (error) {
        console.error('Error saving note on blur:', error)
      }
    }
  }

  return {
    editorRef,
    note,
    isReady,
    handleAutoSaving,
    handleBlur
  }
}
