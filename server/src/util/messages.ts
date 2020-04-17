export const noRolesAllowedMessage = "ARIA roles are not supported on this element.";
export const roleNotAllowedMessage = (role: String, tag: String = "") => `${role} is not a supported ARIA role for ${tag === ""? "this tag" : `${tag} tags.`}`;
export const validateAMessage = "Provide descriptive text in between anchor tags.";
export const validateAltMessage = (footer: String = "or alt=\"\" if image is purely decorative") => `Provide an alt text that describes the image, ${footer}.`;
export const validateAltBadStartMessage = "Alt text should not begin with \"image of\" or similar phrasing.";
export const validateAltDescriptiveMessage = "Alt attribute must be specifically descriptive.";
export const validateAltLongMessage = "Alt text is too long - most screen readers cut off at 125 characters.";
export const validateAriaControlsMessage = "The aria-controls attribute only exhibits functionality with the JAWS screen reader and provides a confusing experience when used: https://heydonworks.com/article/aria-controls-is-poop/";
export const validateAriaEmptyMessage = "Provide a text within the aria label [aria-label=\"\"]";
export const validateAriaLabelBadElementMessage = (element: String) => `The aria-label, aria-labelledBy, and aria-describedBy attributes are not supported on ${element} elements.`;
export const validateAriaLabelMessage = "Provide an aria label to identify the input element [aria-label=\"\"].";
export const validateAriaLabelledByEmptyMessage = "Provide a text within the aria-labelled-by tag [aria-labelled-by=\"\"].";
export const validateAriaOverTitleMessage = "It's recommended to use aria-label or aria-labelled-by to identify form controls, as the title attribute is often used to provide non-essential information.";
export const validateAriaRoleMessage = (role: String = "The specified role value") => `"${role}" is not a valid ARIA role - see https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties for details.`
export const validateAudioMessage = "Consider instead using a <video> tag instead of an <audio> tag to display audio content, as <audio> tags do not currently support subtitles.\nAdd your audio as a <source> element with your captions in a <track kind=\"subtitles\">\nFor more info, see https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/.";
export const validateContrastMessage = (c: Number) => `Color contrast between content and its background must be 4.5:1 or above (is ${c.toFixed(2)}:1).`;
export const validateDivMessage = "Use Semantic HTML5 or specify a WAI-ARIA role [role=\"\"]\nhttps://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles.";
export const validateHeadTitleMessage = "Provide a title within the <head> tags.";
export const validateHeadUserScalableMessage = "Enable pinching to zoom [user-scalable=yes].";
export const validateHtmlMessage = "Provide a language [lang=\"\"].";
export const validateMetaMaximumScaleMessage = "Avoid using [maximum-scale=1].";
export const validateMetaUserScalableMessage = "Enable pinching to zoom [user-scalable=yes].";
export const validateSelectAriaLiveMessage = "We encourage the use of the aria-live=\"polite\" attribute in order to help screen readers announce dynamic changes to the page content: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions";
export const validateSelectMultipleMessage = "We strongly advise the use of multiselect variations other than <select multiple>, as this tag is nearly impossible to use with a screen reader. Read https://www.24a11y.com/2019/select-your-poison-part-2/ for more info.";
export const validateSpanMessage = "Use Semantic HTML5 or specify a WAI-ARIA role [role=\"\"]\nhttps://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles";
export const validateTabIndex = "A tabindex other than 0 or -1 interferes with the focus order.";
export const validateTitleMessage = "Provide a text within the <title> tags.";
export const validateVideoMessage = "We recommend using a third-party video player (such as Plyr: https://plyr.io/) instead of the native <video> element due to its inconsistent behavior with screen readers.";