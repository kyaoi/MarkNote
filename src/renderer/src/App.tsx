import { useState } from 'react'
import { Content, RootLayout, Sidebar } from './components/Layout'
import { Button } from './components/Button'

export default function App() {
  const [number, setNumber] = useState<number>(0)

  return (
    <>
      <RootLayout>
        <Sidebar className="p-2">
          <div className="flex flex-row gap-2">
            <Button onClick={() => setNumber(number + 1)}>+1</Button>
            <Button onClick={() => setNumber(number - 1)}>-1</Button>
          </div>
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <div className="">
            <p>Hello Electron! {number}</p>
          </div>
        </Content>
      </RootLayout>
    </>
  )
}
