import { Typography } from '@mui/material'
import { ReactNode } from 'react'

const TextLabel = ({ children }: { children: ReactNode }) => 
  <Typography
    variant="body2"
    sx={{
      color: '#666',
      fontSize: '11px',
      textTransform: 'uppercase'
    }}
  >
    {children}
  </Typography>

export default TextLabel