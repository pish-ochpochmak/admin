import {FC, PropsWithChildren, Suspense, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Suspense>
    );
};
