import * as posts from '$lib/services/posts'

export const load = async ({ params, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=0, s-maxage=60',
		X: 'Gon give it to ya',
	})
	return { post: await posts.getPost(params.slug) }
}
