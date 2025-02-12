import type { Extension } from '@codemirror/state';
import type { LanguageDescription } from '@codemirror/language';
import { html } from 'atomico';
export interface CodeBlockConfig {
    extensions: Extension[];
    languages: LanguageDescription[];
    expandIcon: () => ReturnType<typeof html> | string;
    searchIcon: () => ReturnType<typeof html> | string;
    clearSearchIcon: () => ReturnType<typeof html> | string;
    searchPlaceholder: string;
    noResultText: string;
    renderLanguage: (language: string, selected: boolean) => ReturnType<typeof html>;
    renderPreview: (language: string, content: string) => null | string | HTMLElement;
    previewToggleButton: (previewOnlyMode: boolean) => ReturnType<typeof html>;
    previewLabel: () => ReturnType<typeof html>;
}
export declare const defaultConfig: CodeBlockConfig;
export declare const codeBlockConfig: import("@milkdown/utils").$Ctx<CodeBlockConfig, "codeBlockConfigCtx">;
//# sourceMappingURL=config.d.ts.map