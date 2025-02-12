import type { DefaultValue } from '@milkdown/kit/core';
import { Editor } from '@milkdown/kit/core';
import type { CrepeFeatureConfig } from '../feature';
import { CrepeFeature } from '../feature';
import type { ListenerManager } from '@milkdown/kit/plugin/listener';
export interface CrepeConfig {
    features?: Partial<Record<CrepeFeature, boolean>>;
    featureConfigs?: CrepeFeatureConfig;
    root?: Node | string | null;
    defaultValue?: DefaultValue;
}
export declare class Crepe {
    #private;
    static Feature: typeof CrepeFeature;
    constructor({ root, features, featureConfigs, defaultValue, }: CrepeConfig);
    create(): Promise<Editor>;
    destroy(): Promise<Editor>;
    get editor(): Editor;
    setReadonly(value: boolean): this;
    getMarkdown(): string;
    on(fn: (api: ListenerManager) => void): this;
}
//# sourceMappingURL=crepe.d.ts.map