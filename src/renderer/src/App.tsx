import {
  Content,
  Layout,
  MarkdownEditor,
  NotePreviewList,
  Sidebar,
  ActionButtonsRow
} from './components'

export default function App() {
  return (
    <>
      <Layout>
        <Sidebar>
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content>
          <MarkdownEditor />
        </Content>
      </Layout>
    </>
  )
}
