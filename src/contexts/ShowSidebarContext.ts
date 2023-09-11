import React from 'react'

type ContextProps = {
  showSidebar: boolean
  setSidebarVisibility: any
}

export const ShowSidebarContext = React.createContext<ContextProps>({ showSidebar: false, setSidebarVisibility: () => {} })