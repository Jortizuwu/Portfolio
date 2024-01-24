import usePersistedStore from '@/store'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  textColor?: string
  textSize?: string
}

const sizeRecord: Record<string, string> = {
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem'
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'sm',
  className = '',
  variant = 'filled',
  textColor = 'blue-gray',
  textSize = sizeRecord[size],
  ...rest
}) => {
  const { theme } = usePersistedStore()

  const style: React.CSSProperties = {
    color: textColor ?? theme.text.primary,
    fontSize: textSize,
    border:
      variant === 'outlined'
        ? `1px solid ${textColor ?? theme.text.primary}`
        : 'none',
    backgroundColor:
      variant === 'filled' ? textColor ?? theme.text.primary : 'transparent'
  }

  return (
    <button
      className={`items-center hover:bg-${theme.background.primary} hover:text-${theme.text.primary} transition-all ${className}`}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
