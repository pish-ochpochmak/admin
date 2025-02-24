import {FC, useMemo} from 'react';
import {QueryClient, useQueryClient} from '@tanstack/react-query';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {paths} from '@/config/paths';

const convert = (queryClient: QueryClient) => (m: any) => {
    const {clientLoader, clientAction, default: Component, ...rest} = m;
    return {
        ...rest,
        loader: clientLoader?.(queryClient),
        action: clientAction?.(queryClient),
        Component,
    };
};

export const createAppRouter = (queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: paths.auth.login.path,
            lazy: () => import('./routes/auth/login').then(convert(queryClient)),
        },
        {
            path: paths.app.profile.path,
            lazy: () => import('./routes/app/profile').then(convert(queryClient)),
        },
        {
            path: paths.app.tasks.path,
            lazy: () => import('./routes/app/tasks').then(convert(queryClient)),
        },
    ]);

export const AppRouter: FC = () => {
    const queryClient = useQueryClient();
    const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

    return <RouterProvider router={router} />;
};
