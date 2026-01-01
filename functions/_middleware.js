export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  if (url.hostname.endsWith('.pages.dev')) {
    return Response.redirect(
      'https://skinart.anakama.xyz' + url.pathname + url.search,
      301
    );
  }

  return next();
}
