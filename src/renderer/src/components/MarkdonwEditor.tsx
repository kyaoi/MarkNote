import {
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  UndoRedo,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'
import { NoteInfo } from '@shared/types'

export const MarkdownEditor = ({ currentNote }: { currentNote: NoteInfo }) => {
  if (!currentNote) return null

  const { editorRef, note, isReady, handleAutoSaving, handleBlur } = useMarkdownEditor(currentNote)

  if (!isReady) {
    return null
  }

  return (
    <MDXEditor
      ref={editorRef}
      key={note.title}
      markdown={note.content || ''}
      onChange={handleAutoSaving}
      onBlur={handleBlur}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        tablePlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <div className="flex gap-2 items-center space-x-4 p-2 rounded-md shadow">
                <UndoRedo />
                <CreateLink />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <InsertThematicBreak />
                <InsertTable />
              </div>
            </>
          )
        })
      ]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}
