export type NoteInfo = {
  title: string
  lastEditTime: number
}

export type NoteContent = string

export type MarkdownNote = NoteInfo & { content: NoteContent }

export type NoteData = NoteInfo & { content: NoteContent }

export type GetNotes = () => Promise<NoteInfo[]>
export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>
export type WriteNote = (title: NoteInfo['title'], content: NoteContent) => Promise<void>
export type CreateNote = () => Promise<NoteInfo['title'] | false>
export type DeleteNote = (title: NoteInfo['title']) => Promise<boolean>
