import {FC, PropsWithChildren, memo} from 'react';
import {type VariantProps, cva} from 'class-variance-authority';

import {cn} from '@/lib/cn';

import cls from './container.module.scss';

const containerVariants = cva('', {
    variants: {
        variant: {
            default: cls['container--default'],
            center: cls['container--center'],
        },
    },
});

interface ConatinerProps extends VariantProps<typeof containerVariants>, PropsWithChildren {}

export const Conatiner: FC<ConatinerProps> = memo(({children, variant}) => {
    return <main className={cn(containerVariants({variant}))}>{children}</main>;
});
