import type { Component } from 'atomico';
import type { Ctx } from '@milkdown/kit/ctx';
import type { Selection } from '@milkdown/kit/prose/state';
import type { ToolbarFeatureConfig } from './index';
export interface ToolbarProps {
    ctx: Ctx;
    hide: () => void;
    show: boolean;
    selection: Selection;
    config?: ToolbarFeatureConfig;
}
export declare const toolbarComponent: Component<ToolbarProps>;
export declare const ToolbarElement: import("atomico/types/dom").Atomico<ToolbarProps | (ToolbarProps & import("atomico/types/component").SyntheticMetaProps<any>), ToolbarProps | (ToolbarProps & import("atomico/types/component").SyntheticMetaProps<any>), {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
//# sourceMappingURL=component.d.ts.map