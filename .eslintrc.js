module.exports = {
    "env": {
        "browser": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [
			"error",
			"never"
        ],
        "react/jsx-filename-extension": "off",
        "no-tabs": "off",
        "indent": [
			"error",
			"tab"
        ],
        "react/jsx-indent": [
			"error",
			"tab"
		],
		"react/jsx-indent-props": [
			"error",
			"tab"
		],
        "arrow-body-style": "off",
        "max-len": "off",
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "space-in-parens": "off",
        "import/prefer-default-export": "off",
        "comma-dangle": ["error", "never"],
        "react/prop-types": "off",
        "no-underscore-dangle": "off"
    }
};