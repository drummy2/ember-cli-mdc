import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { getWithDefault } from '@ember/object';

export default Service.extend({
  dense: false,

  init () {
    this._super (...arguments);
    this._loadConfiguration ();
  },

  _loadConfiguration () {
    const ENV = getOwner (this).resolveRegistration ('config:environment');
    const config = getWithDefault (ENV, 'ember-cli-mdc', {});
    const inputConfig = getWithDefault (config, 'input', {});
    const textAreaConfig = getWithDefault (config, 'textarea', {});

    this.setProperties ({
      dense: textAreaConfig.dense || inputConfig.dense || false,
    });
  }
});
