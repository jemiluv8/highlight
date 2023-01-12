import React from 'react'
import { IconProps } from './types'

type Props = IconProps & {
	color?: string
	size?: number | string
	width?: number | string
	height?: number | string
}

export const IconCursorClick: React.FC<Props> = ({
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
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.67175 1.91151C6.52881 1.37805 5.98047 1.06146 5.44701 1.2044C4.91354 1.34735 4.59696 1.89568 4.7399 2.42915L4.99872 3.39508C5.14166 3.92854 5.69 4.24512 6.22346 4.10218C6.75693 3.95924 7.07351 3.4109 6.93057 2.87744L6.67175 1.91151Z"
				fill={color}
			/>
			<path
				d="M2.42911 4.73994C1.89565 4.597 1.34731 4.91358 1.20437 5.44704C1.06142 5.98051 1.37801 6.52885 1.91147 6.67179L2.8774 6.93061C3.41086 7.07355 3.9592 6.75697 4.10214 6.2235C4.24509 5.69004 3.9285 5.1417 3.39504 4.99876L2.42911 4.73994Z"
				fill={color}
			/>
			<path
				d="M11.2426 4.17153C11.6331 3.78101 11.6331 3.14784 11.2426 2.75732C10.852 2.36679 10.2189 2.36679 9.82835 2.75732L9.12124 3.46443C8.73072 3.85495 8.73072 4.48811 9.12124 4.87864C9.51177 5.26916 10.1449 5.26916 10.5355 4.87864L11.2426 4.17153Z"
				fill={color}
			/>
			<path
				d="M4.17149 11.2426L4.8786 10.5355C5.26912 10.145 5.26912 9.5118 4.8786 9.12128C4.48808 8.73076 3.85491 8.73076 3.46439 9.12128L2.75728 9.82839C2.36676 10.2189 2.36676 10.8521 2.75728 11.2426C3.1478 11.6331 3.78097 11.6331 4.17149 11.2426Z"
				fill={color}
			/>
			<path
				d="M7.37142 6.07155C7 5.92299 6.57578 6.01006 6.29292 6.29292C6.01006 6.57579 5.92298 7 6.07155 7.37142L10.0716 17.3714C10.2178 17.737 10.565 17.9828 10.9585 17.9992C11.3519 18.0155 11.7183 17.7995 11.8945 17.4472L13.274 14.6882L16.2929 17.7071C16.6834 18.0977 17.3166 18.0977 17.7071 17.7071C18.0977 17.3166 18.0977 16.6834 17.7071 16.2929L14.6882 13.274L17.4472 11.8945C17.7995 11.7183 18.0155 11.3519 17.9992 10.9585C17.9828 10.565 17.737 10.2178 17.3714 10.0716L7.37142 6.07155Z"
				fill={color}
			/>
		</svg>
	)
}
