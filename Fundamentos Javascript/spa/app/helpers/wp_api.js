const NAME = "lucylara",
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
POSTS = `${API_WP}/posts?_enbed`,
POST = `${API_WP}/posts`,
SEARCH = `${API_WP}/search?_embed&search=`;

export default {NAME,SITE,API_WP,POSTS,POST,SEARCH}

