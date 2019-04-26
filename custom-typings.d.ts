// This needs to work in the parent module

import { Attributes } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicAttributes {
            sel?: string | symbol;
        }
    }
    namespace React {
        interface ClassAttributes<T> extends Attributes {
            sel?: string | symbol;
        }
    }
}
