module.exports = {
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"rules": {
		/* off because we dont agree with AirBnB's settings */
		"arrow-body-style": "off",
		"react/no-array-index-key": "warn",
		"arrow-parens": "off",
		"brace-style": "warn",
		"react/jsx-no-target-blank": "warn",
		"camelcase": "off", // we use camelCase, but we also break it in places, e.g. myFn2_subFn()
		"class-methods-use-this": "off",
		"comma-dangle": "off",
		"func-names": "off",
		"import/newline-after-import": "warn",
		"indent": ["warn", "tab"],
		"jsx-a11y/href-no-hash": "warn",
		"jsx-a11y/img-has-alt": "warn",
		"max-depth": ["warn", 4],
		"max-len": ["warn", 140],
		"max-nested-callbacks": ["warn", 4],
		"no-continue": "off",
		"no-confusing-arrow": "off",
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"no-tabs": "off",
		"no-underscore-dangle": "off",
		"no-unused-vars": "warn",
		"no-useless-constructor": "warn",
		"no-useless-return": "off",
		"prefer-template": "off",
		"quote-props": "warn",
		"react/jsx-closing-bracket-location": "warn",
		"react/jsx-first-prop-new-line": "off",
		"react/jsx-indent": ["warn", "tab"],
		"react/jsx-indent-props": ["warn", "tab"],
		"react/no-multi-comp": "warn",
		"react/prefer-stateless-function": "warn",
		"react/self-closing-comp": "warn",
		"react/sort-comp": "warn",
		"space-in-parens": "off",
		"space-unary-ops": "off",
		"spaced-comment": "off",
		"react/jsx-boolean-value": "warn",
		"radix": "off",
		/* broken - seems to cause errors in linting */
		"no-multi-assign": "off",
		/* off because the warnings are more noise than signal i.e. we might switch them on sometime*/
		"no-var": "warn",
		"vars-on-top": "warn",
		"react/jsx-no-target-blank": "warn",
		"comma-spacing": "off",
		"consistent-return": "warn",
		"import/extensions": "warn",
		"import/first": "warn",
		"import/no-named-as-default": "off",
		"jsx-a11y/label-has-for": "warn",
		"jsx-a11y/no-static-element-interactions": "warn",
		"jsx-quotes": "off",
		"key-spacing": "off",
		"keyword-spacing": "off",
		"no-extra-bind": "warn",
		"no-trailing-spaces": "warn",
		"no-use-before-define": "warn",
		"object-curly-spacing": "off",
		"object-property-newline": "off",
		"object-shorthand": "off",
		"prefer-arrow-callback": "off",
		"prefer-const": "off",
		"quotes": "off",
		"react/jsx-curly-spacing": "warn",
		"react/jsx-no-bind": "warn",
		"react/jsx-space-before-closing": "warn",
		"react/jsx-tag-spacing": "warn",
		"react/no-unescaped-entities": "warn",
		"react/prop-types": "off",
		"react/forbid-prop-types": "warn",
		"space-before-blocks": "warn",
		"space-before-function-paren": "off",
		"space-comment": "off",
		"space-infix-ops": "off",
	},
	"globals": {
		"window": true,
		"document": true,
		"navigator": true,
		"$": true, // zepto is always available
	}
};