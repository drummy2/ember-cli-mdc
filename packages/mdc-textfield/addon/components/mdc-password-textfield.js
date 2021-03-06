import Component from '@ember/component';
import layout from '../templates/components/mdc-password-textfield';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  classNames: ['mdc-text-field--password'],

  showPassword: false,

  iconOn: 'visibility',

  iconOff: 'visibility_off',

  actions: {
    toggle () {
      this.toggleProperty ('showPassword');
    }
  }
});
