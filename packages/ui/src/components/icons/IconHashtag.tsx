import React from 'react'
import { IconProps } from './types'

type Props = IconProps & {
	color?: string
	size?: number | string
	width?: number | string
	height?: number | string
}

export const IconHashtag: React.FC<Props> = ({
	size,
	color,
	width,
	height,
}) => {
	if (size) {
		width = size
		height = size
	}
	width = width ?? 20
	height = height ?? 20
	color = color ?? 'currentColor'
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.46968 2.12263C6.84473 2.21639 7.07277 2.59645 6.979 2.9715L6.67145 4.20173H8.72836L9.1208 2.63195C9.21457 2.2569 9.59462 2.02886 9.96968 2.12263C10.3447 2.21639 10.5728 2.59645 10.479 2.9715L10.1714 4.20173H11.8999C12.2865 4.20173 12.5999 4.51513 12.5999 4.90173C12.5999 5.28833 12.2865 5.60173 11.8999 5.60173H9.82145L9.12145 8.40173H10.4999C10.8865 8.40173 11.1999 8.71513 11.1999 9.10173C11.1999 9.48833 10.8865 9.80173 10.4999 9.80173H8.77145L8.379 11.3715C8.28524 11.7466 7.90518 11.9746 7.53013 11.8808C7.15507 11.7871 6.92704 11.407 7.0208 11.032L7.32836 9.80173H5.27145L4.879 11.3715C4.78524 11.7466 4.40518 11.9746 4.03013 11.8808C3.65507 11.7871 3.42704 11.407 3.5208 11.032L3.82836 9.80173H2.0999C1.7133 9.80173 1.3999 9.48833 1.3999 9.10173C1.3999 8.71513 1.7133 8.40173 2.0999 8.40173H4.17836L4.87836 5.60173H3.4999C3.1133 5.60173 2.7999 5.28833 2.7999 4.90173C2.7999 4.51513 3.1133 4.20173 3.4999 4.20173H5.22836L5.6208 2.63195C5.71457 2.2569 6.09462 2.02886 6.46968 2.12263ZM6.32145 5.60173L5.62145 8.40173H7.67836L8.37836 5.60173H6.32145Z"
				fill={color}
			/>
		</svg>
	)
}
