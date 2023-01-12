import React from 'react'
import { IconProps } from './types'

type Props = IconProps & {
	color?: string
	size?: number | string
	width?: number | string
	height?: number | string
}

export const IconFingerprint: React.FC<Props> = ({
	size,
	color,
	width,
	height,
}) => {
	if (size) {
		width = size
		height = size
	}
	width = width ?? 13
	width = width ?? 13
	height = height ?? 14
	color = color ?? 'currentColor'
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 13 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.0619 2.23455C4.7795 1.81944 5.61275 1.58203 6.4998 1.58203C9.19219 1.58203 11.3748 3.76464 11.3748 6.45703C11.3748 7.8473 11.1807 9.19314 10.8177 10.4685C10.7358 10.7562 10.4361 10.923 10.1484 10.8412C9.86069 10.7593 9.69383 10.4596 9.77572 10.1719C10.1115 8.99208 10.2915 7.74602 10.2915 6.45703C10.2915 4.36295 8.59388 2.66536 6.4998 2.66536C5.80827 2.66536 5.16151 2.85 4.60436 3.17229C4.34541 3.32208 4.01406 3.2336 3.86426 2.97465C3.71447 2.7157 3.80295 2.38435 4.0619 2.23455ZM3.01741 3.82149C3.27636 3.97129 3.36485 4.30264 3.21506 4.56159C2.89276 5.11874 2.70813 5.7655 2.70813 6.45703C2.70813 7.38832 2.49409 8.27114 2.11201 9.05762C1.98129 9.32671 1.65719 9.43887 1.38811 9.30815C1.11902 9.17743 1.00686 8.85332 1.13758 8.58424C1.44955 7.94206 1.6248 7.22078 1.6248 6.45703C1.6248 5.56998 1.86221 4.73674 2.27732 4.01914C2.42711 3.76019 2.75846 3.6717 3.01741 3.82149ZM3.79141 6.45703C3.79141 4.96126 5.00398 3.7487 6.49975 3.7487C7.99552 3.7487 9.20808 4.96126 9.20808 6.45703C9.20808 7.03254 9.1689 7.59953 9.09299 8.15533C9.05251 8.45173 8.77941 8.6592 8.483 8.61872C8.1866 8.57823 7.97914 8.30513 8.01962 8.00873C8.08892 7.50133 8.12475 6.98331 8.12475 6.45703C8.12475 5.55957 7.39721 4.83203 6.49975 4.83203C5.60228 4.83203 4.87475 5.55957 4.87475 6.45703C4.87475 8.04714 4.41961 9.52599 3.63316 10.7762C3.62557 10.7883 3.61815 10.8004 3.61092 10.8126C3.45816 11.0698 3.12581 11.1545 2.8686 11.0017C2.61139 10.8489 2.52671 10.5166 2.67947 10.2594C2.69142 10.2393 2.70365 10.2192 2.71618 10.1993L3.17467 10.4878L2.71618 10.1993C3.3971 9.11689 3.79141 7.83717 3.79141 6.45703ZM6.49973 5.91536C6.79888 5.91536 7.04139 6.15788 7.04139 6.45703C7.04139 8.46719 6.46454 10.3443 5.46712 11.9299C5.30783 12.1831 4.97343 12.2592 4.72021 12.0999C4.46699 11.9406 4.39084 11.6062 4.55013 11.353C5.44206 9.93514 5.95806 8.25717 5.95806 6.45703C5.95806 6.15788 6.20057 5.91536 6.49973 5.91536ZM8.36476 9.18583C8.65261 9.26729 8.81993 9.56667 8.73847 9.85452C8.52418 10.6118 8.24011 11.3401 7.89366 12.0316C7.75967 12.2991 7.43422 12.4073 7.16675 12.2733C6.89929 12.1393 6.79109 11.8138 6.92508 11.5464C7.24131 10.9152 7.50053 10.2505 7.69607 9.55954C7.77752 9.27169 8.07691 9.10438 8.36476 9.18583Z"
				fill={color}
			/>
		</svg>
	)
}
