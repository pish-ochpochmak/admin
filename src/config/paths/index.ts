export const paths = {
    app: {
        profile: {
            path: '/profile',
            getHref: () => '/profile',
        },

        tasks: {
            path: '/tasks',
            getHref: () => '/tasks',
        },
    },

    auth: {
        login: {
            path: '/',
            getHref: () => '/',
        },
    },
} as const;
