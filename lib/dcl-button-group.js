/*
 * dcl-button-group
 * https://github.com/dualjs/dcl-button-group
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

var D = require('dual');
require('dcl-bootstrap');


module.exports = D.Container.extend({
    ATTRS: {
        caption: {
            textAsset: 'root'
        },

        size: {
            cssClass: {
                'large': 'btn-group-lg',
                'small': 'btn-group-sm',
                'tiny': 'btn-group-xs',
            },
            cssClassAsset: 'root'
        },

        vertical: {
            asset: 'root'
        }
    },

    initStructure: function() {
        this.$ = D.fromJSON([
            'div', {
                'ui:asset': 'root',
                'class': 'btn-group'
            }
        ]);
    },

    applyAttribute_vertical: function(value) {
        var assetName = this.ATTRS.vertical.asset;
        var asset = this.assets[assetName];
        if (value) {
            asset.removeClass('btn-group');
            asset.addClass('btn-group-vertical');
            return;
        }
        asset.removeClass('btn-group-vertical');
        asset.addClass('btn-group');
    }
});