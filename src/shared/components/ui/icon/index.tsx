import React from 'react'

interface IconProps {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  className?: string
  color?: string
}

const Icon: React.FC<IconProps> = ({
  icon,
  className = '',
  color = '#fff'
}) => {
  const style: React.CSSProperties = {
    color,
    strokeWidth: 2,
    height: 14
  }

  return React.createElement(icon, {
    className,
    style
  })
}

export default Icon
