import { createElement, ReactElement, ReactType } from 'react';
import { incorporate } from '@cycle/react';

export type PropsExtensions = {
    sel?: string | symbol;
};

function createIncorporatedElement<P = any>(
    type: ReactType<P>,
    props: P & PropsExtensions | null,
    ...children: Array<string | ReactElement<any>>
): ReactElement<P> {
    return createElement(type, props, ...children);
}

export default createIncorporatedElement;
