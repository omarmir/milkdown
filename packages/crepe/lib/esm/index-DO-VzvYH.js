import { configureLinkTooltip, linkTooltipConfig, linkTooltipPlugin } from '@milkdown/kit/component/link-tooltip';
import { g as confirmIcon, r as removeIcon, e as editIcon, h as copyIcon } from './todo-list-B9RfgTQO.js';
import 'atomico';

const defineFeature = (editor, config) => {
  editor.config(configureLinkTooltip).config((ctx) => {
    ctx.update(linkTooltipConfig.key, (prev) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        ...prev,
        linkIcon: (_a = config == null ? void 0 : config.linkIcon) != null ? _a : () => copyIcon,
        editButton: (_b = config == null ? void 0 : config.editButton) != null ? _b : () => editIcon,
        removeButton: (_c = config == null ? void 0 : config.removeButton) != null ? _c : () => removeIcon,
        confirmButton: (_d = config == null ? void 0 : config.confirmButton) != null ? _d : () => confirmIcon,
        inputPlaceholder: (_e = config == null ? void 0 : config.inputPlaceholder) != null ? _e : "Paste link...",
        onCopyLink: (_f = config == null ? void 0 : config.onCopyLink) != null ? _f : () => {
        }
      };
    });
  }).use(linkTooltipPlugin);
};

export { defineFeature };
//# sourceMappingURL=index-DO-VzvYH.js.map
