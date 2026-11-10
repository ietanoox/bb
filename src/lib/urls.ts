/** Keep internal URLs working on a custom domain or GitHub project subpath. */
export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const asset = (filename: string) => href(`assets/${filename.replace(/^\/?assets\//, '')}`);
