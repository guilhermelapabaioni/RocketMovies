import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { QueryConfig } from '../config/react-query-config'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

const queryClient = new QueryClient(QueryConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
