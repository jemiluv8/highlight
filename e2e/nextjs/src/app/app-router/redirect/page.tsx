import { redirect } from 'next/navigation'
import logger from '@/highlight.logger'

type Props = {
	searchParams: { shouldRedirect?: boolean }
}

export default function RedirectPage({ searchParams }: Props) {
	logger.info({}, `redirect page`)

	if (searchParams.shouldRedirect) {
		return redirect(`/ssr`)
	}

	return (
		<div>
			<h1>App Router: No Redirect</h1>
		</div>
	)
}
