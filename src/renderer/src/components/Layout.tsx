import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentPropsWithoutRef<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ children, className, ...props }: ComponentPropsWithoutRef<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh+10px] overflow-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Content = ({ children, className, ...props }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
}

Content.displayName = 'Content'
