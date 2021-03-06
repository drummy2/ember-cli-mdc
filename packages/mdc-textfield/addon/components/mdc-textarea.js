import Component from '@ember/component';
import layout from '../templates/components/mdc-textarea';

import { computed } from '@ember/object';
import { not, oneWay } from '@ember/object/computed';

import { inject as service } from '@ember/service';

import TextSupport from '../mixins/text-support';

export default Component.extend (TextSupport, {
  layout,

  classNames: ['mdc-text-field--textarea'],
  classNameBindings: ['fullWidth:mdc-text-field--fullwidth', 'dense:mdc-text-field--dense'],

  fullWidth: false,
  notFullWidth: not ('fullWidth'),

  dense: oneWay ('_defaultConfig.dense'),

  _defaultConfig: service ('mdc-textarea-configurator'),

  textAreaId: computed (function () {
    return `${this.elementId}-textarea`;
  })
});
