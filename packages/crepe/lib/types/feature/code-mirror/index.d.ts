import type { LanguageDescription } from '@codemirror/language';
import type { Extension } from '@codemirror/state';
import { html } from 'atomico';
import type { DefineFeature, Icon } from '../shared';
interface CodeMirrorConfig {
    extensions: Extension[];
    languages: LanguageDescription[];
    theme: Extension;
    expandIcon: Icon;
    searchIcon: Icon;
    clearSearchIcon: Icon;
    searchPlaceholder: string;
    noResultText: string;
    renderLanguage: (language: string, selected: boolean) => ReturnType<typeof html> | string;
    renderPreview: (language: string, content: string) => string | HTMLElement | null;
    previewToggleIcon: (previewOnlyMode: boolean) => ReturnType<Icon>;
    previewToggleText: (previewOnlyMode: boolean) => ReturnType<typeof html>;
    previewLabel: () => ReturnType<typeof html>;
}
export type CodeMirrorFeatureConfig = Partial<CodeMirrorConfig>;
export declare const defineFeature: DefineFeature<CodeMirrorFeatureConfig>;
export {};
//# sourceMappingURL=index.d.ts.map