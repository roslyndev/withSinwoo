const config = {
    mode : process.env.VUE_APP_ENV,
    baseUrl : process.env.VUE_APP_SERVICE_URL,
    identity : {
        baseUrl : process.env.VUE_APP_IDENTITY_BASE_URL,
        clientId : process.env.VUE_APP_IDENTITY_CLIENTID,
        clientSecret : process.env.VUE_APP_IDENTITY_CLIENTSECRET,
        scope : process.env.VUE_APP_IDENTITY_SCOPE,
        cookieName : process.env.VUE_APP_IDENTITY_COOKIE,
        api : process.env.VUE_APP_IDENTITY_API_URL
    },
    apis : {
        content : process.env.VUE_APP_API_CONTENT_URL,
        resource : process.env.VUE_APP_API_RESOURCE_URL,
        connect : process.env.VUE_APP_API_CONNECT_URL,
        translation : process.env.VUE_APP_API_TRANSLATION_URL,
        member : process.env.VUE_APP_API_MEMBER_URL,
        site : process.env.VUE_APP_API_SITE_URL
    },
    image: process.env.VUE_APP_API_IMAGE_URL,
    isMobile : (window.innerWidth < 768),
    global : {
        cookieName : "GN2AppUser",
    },
    info : {
        email : "webmaster@roslyn.dev"
    }, 
    site : {
        title : process.env.VUE_APP_SITE_TITLE,
    }
};

export default config;