import { type Component } from 'atomico';
import type { LatexConfig } from '..';
import type { EditorView } from '@milkdown/kit/prose/view';
type LatexEditComponentProps = {
    config: Partial<LatexConfig>;
    innerView: EditorView;
    updateValue: () => void;
};
export declare const latexEditComponent: Component<LatexEditComponentProps>;
export declare const LatexInlineEditElement: import("atomico/types/dom").Atomico<LatexEditComponentProps | (LatexEditComponentProps & import("atomico/types/component").SyntheticMetaProps<any>), LatexEditComponentProps | (LatexEditComponentProps & import("atomico/types/component").SyntheticMetaProps<any>), {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
export {};
//# sourceMappingURL=component.d.ts.map