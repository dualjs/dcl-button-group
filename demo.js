/*jshint browser:true*/
var D = require('dual');
var ButtonGroup = require('./');
var Button = require('dcl-button');

var demo = D.fromJSON([
    'div', [
        ['p', [
            ['ButtonGroup', [
                ['Button', {caption: 'Hello'}],
                ['Button', {caption: 'World'}]
            ]]
        ]],
        ['p', [
            ['ButtonGroup', {size: 'small'},
                [
                    ['Button', {caption: 'Small'}],
                    ['Button', {caption: 'Small'}],
                    ['Button', {caption: 'Small'}]
                ]
            ]
        ]],
        ['p', [
            ['ButtonGroup', {size: 'tiny'},
                [
                    ['Button', {caption: 'Tiny'}],
                    ['Button', {caption: 'Tiny'}],
                    ['Button', {caption: 'Tiny'}],
                    ['Button', {caption: 'Tiny'}]
                ]
            ]
        ]],
        ['p', [
            ['ButtonGroup', {vertical: true},
                [
                    ['Button', {caption: 'Vertical'}],
                    ['Button', {caption: 'Vertical'}],
                    ['Button', {caption: 'Vertical'}],
                    ['Button', {caption: 'Vertical'}]
                ]
            ]
        ]]
    ]
], {
    'Button': Button,
    'ButtonGroup': ButtonGroup
});

document.body.appendChild(demo.domify());