import type { Editor } from '@milkdown/kit/core';
import type { Ref } from 'vue';
export type Instance = [Ref<true>, () => undefined] | [Ref<false>, () => Editor];
export declare function useInstance(): Instance;
//# sourceMappingURL=use-instance.d.ts.map