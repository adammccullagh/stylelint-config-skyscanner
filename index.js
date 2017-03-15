/*
 Copyright 2016 Skyscanner
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const pascalCase = '([A-Z][a-zA-Z0-9]+)'; // PascalCase
const kebabCase = '([a-z][a-z0-9]*(-[a-z0-9]+)*)'; // kebab-case
const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)'; // camelCase

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-strict-value',
    'stylelint-order',
  ],
  rules: {
    'selector-no-id': true,
    'selector-max-compound-selectors': 2,
    'declaration-no-important': true,
    'number-leading-zero': 'never',
    'unit-blacklist': ['px'],
    'selector-class-pattern': [
      new RegExp(`^(${pascalCase}|${kebabCase})` + // block
        `(__(${camelCase}|${kebabCase}))?` + // element
        `(--(${camelCase}|${kebabCase}))?$`), // modifier
      {
        resolveNestedSelectors: true,
      },
    ],
    'scss/at-function-pattern': '[a-z0-9]+(-[a-z0-9]+)+',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-pattern': '[a-z0-9]+(-[a-z0-9]+)+(--[a-z0-9]+)?',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '[a-z0-9]+(-[a-z0-9]+)+',
    'scss/percent-placeholder-pattern': '[a-z0-9]+(-[a-z0-9]+)+',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'fill', 'stroke', 'font-size', 'line-height'], {
        ignoreKeywords: {
          '/color/': ['currentColor', 'transparent', 'inherit'],
          fill: ['currentColor', 'transparent', 'inherit'],
          stroke: ['currentColor', 'transparent', 'inherit'],
        },
      }],
    'order/order': [
      {
        type: 'at-rule',
        name: 'extend',
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: false,
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'content',
      'float',
      'clear',
      'display',
      'visibility',
      'z-index',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-count',
      'column-width',
      'transform',
      'transition',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'cursor',
      'color',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'font-style',
      'font-variant',
      'font-weight',
      'letter-spacing',
      'line-height',
      'list-style',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-transform',
      'text-wrap',
      'white-space',
      'word-spacing',
      'border-collapse',
      'border-spacing',
      'box-shadow',
      'caption-side',
      'cursor',
      'empty-cells',
      'opacity',
      'overflow',
      'quotes',
      'speak',
      'table-layout',
      'vertical-align',
    ],
  },
};