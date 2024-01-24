import usePersistedStore from '@/store'
import React from 'react'

interface TypographyProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  className?: string
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'h6',
  className = ''
}) => {
  const { theme } = usePersistedStore()

  const sizeMapping: Record<string, string> = {
    h1: '2em',
    h2: '1.5em',
    h3: '1.17em',
    h4: '1.12em',
    h5: '1em',
    h6: '0.83em',
    span: '0.83em',
    p: '0.83em'
  }

  const style: React.CSSProperties = {
    fontSize: sizeMapping[variant] || sizeMapping['h6'],
    color: theme.text.primary
  }

  return React.createElement(variant ? variant : 'h1', {
    children,
    className,
    style
  })
}

export default Typography
