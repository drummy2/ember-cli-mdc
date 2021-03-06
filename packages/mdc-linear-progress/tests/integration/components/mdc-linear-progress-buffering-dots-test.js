import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdc-linear-progress-buffering-dots', 'Integration | Component | mdc linear progress buffering dots', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdc-linear-progress-buffering-dots}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdc-linear-progress-buffering-dots}}
      template block text
    {{/mdc-linear-progress-buffering-dots}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
