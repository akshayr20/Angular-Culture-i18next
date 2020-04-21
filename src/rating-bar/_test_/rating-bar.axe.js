import '../rating-bar';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-rating-bar-axe', () => {
    let ratingBar;
    beforeEach(async function () {
        ratingBar = document.createElement('orxe-rating-bar');
        await document.body.append(ratingBar);
    });
    afterEach(async function () {
        await ratingBar.remove();
    });
    async function setProperties(properties) {
        for (const property in properties) {
            if (ratingBar.hasOwnProperty(property)) {
                ratingBar[property] = properties[property];
            }
        }
        await ratingBar.requestUpdate();
    }
    it('should support all WCAG Accessibility Rules. when default rating bar is rendered', async () => {
        const result = await axe(ratingBar);
        expect(result).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. for donut rating bar', async () => {
        await setProperties({ type: 'donut' });
        const result = await axe(ratingBar);
        expect(result).toHaveNoViolations();
    });
});
