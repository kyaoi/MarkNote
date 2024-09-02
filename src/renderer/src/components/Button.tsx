import { PropsWithChildren } from 'react'

export const Button = ({ children, onClick }: PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <button
      className="bg-black border px-2 py-px border-black rounded cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
