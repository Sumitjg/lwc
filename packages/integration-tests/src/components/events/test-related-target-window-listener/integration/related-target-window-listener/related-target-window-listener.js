import { LightningElement } from 'lwc';

export default class Test extends LightningElement {
    testStatus = '';
    constructor() {
        super();
        window.addEventListener('mouseout', (event) => {
            try {
                void event.relatedTarget;
                this.testStatus += event.relatedTarget.tagName + ';';
            } catch (e) {
                this.testStatus += 'error';
            }
        });
    }
}
