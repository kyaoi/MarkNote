import { MDXEditorMethods } from '@mdxeditor/editor'
import { useNoteData } from '@renderer/providers/NoteDataProvider'
import { autoSavingTime } from '@shared/constants'
import { NoteContent } from '@shared/types'
import { throttle } from 'lodash'
import { useEffect, useRef } from 'react'

export const useMarkdownEditor = () => {
  const { note, setNote } = useNoteData()
  useEffect(() => {
    setNote({ title: '', content: '', lastEditTime: Number(new Date()) })
  })
  useEffect(() => {
    console.log('run useMarkdownEditor')
    console.log('note', note)
  }, [note])
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!note) return

      console.info('Auto saving:', note, content)

      setNote({ title: note.title, content, lastEditTime: Number(new Date()) })
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!note) return

    // handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()
    console.info('handleBlur: Auto saving:', note, content)
    console.log('typeof content', typeof content)

    if (content != null) {
      setNote({ title: note.title, content, lastEditTime: Number(new Date()) })
    }
  }

  return {
    editorRef,
    note,
    handleAutoSaving,
    handleBlur
  }
}
