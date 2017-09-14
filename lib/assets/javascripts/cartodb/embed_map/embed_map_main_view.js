var cdb = require('cartodb.js-v3');
var EmbedMapContentView = require('./embed_map_content_view');
var VendorScriptsView = require('../common/vendor_scripts_view');

module.exports = cdb.core.View.extend({
  initialize: function () {
    this._initModels();
    this._initViews();
  },

  _initModels: function () {
    this.user = this.options.user;
  },

  _initViews: function () {
    var embedMapContentView = new EmbedMapContentView();
    this.$('#app').append(embedMapContentView.render().el);

    var vendorScriptsView = new VendorScriptsView({
      config: this.options.config,
      assetsVersion: this.options.assetsVersion,
      user: this.user,
      appKey: 'embeds'
    });
    this.$el.append(vendorScriptsView.render().el);

    return this;
  }
});