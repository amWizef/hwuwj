self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        "/": ["static/chunks/pages/index-4c9c6e43c182b474.js"],
        "/500": ["static/chunks/pages/500-65179c2100c7b45e.js"],
        "/_error": ["static/chunks/pages/_error-9e7fff58068b6929.js"],
        "/commands": ["static/chunks/706-8238210b47841911.js", "static/chunks/pages/commands-7a0102a83623e3b7.js"],
        "/pricing": ["static/chunks/pages/pricing-9f4088e2405abcc3.js"],
        "/privacy-policy": [s, "static/chunks/pages/privacy-policy-4a1fe436f98acb86.js"],
        "/refund-policy": [s, "static/chunks/pages/refund-policy-60d5a6a53ec8722f.js"],
        "/terms-of-use": [s, "static/chunks/pages/terms-of-use-f5e69259d8728e29.js"],
        sortedPages: ["/", "/500", "/_app", "/_error", "/commands", "/pricing", "/privacy-policy", "/refund-policy", "/terms-of-use"]
    }
}("static/chunks/526-f907ff491200199f.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();