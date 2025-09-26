
export function getFileUrl(path, baseUrl = null) {
    if (!path) return null;

    const appUrl = baseUrl || window.APP_URL || window.location.origin;

    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    return `${appUrl}/storage/${path}`;
}
