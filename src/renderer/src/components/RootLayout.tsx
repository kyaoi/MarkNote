import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Layout = ({ children, className, ...props }: ComponentPropsWithoutRef<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ children, ...props }: ComponentPropsWithoutRef<'aside'>) => {
  return (
    <aside className="w-[250px] p-2 mt-10 h-[100vh+10px] overflow-auto" {...props}>
      {children}
    </aside>
  )
}

export const Content = ({ children, ...props }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className="flex-1 overflow-auto border-l bg-zinc-900/50 border-l-white/20" {...props}>
      {children}
    </div>
  )
}

Content.displayName = 'Content'
