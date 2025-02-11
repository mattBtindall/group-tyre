import pluginVue from 'eslint-plugin-vue'
export default [
    // add more generic rulesets here, such as:
    // js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
    {
        rules: {
            "vue/html-indent": ["error", 4],
            "vue/first-attribute-linebreak": ["error", {
                "singleline": "ignore",
                "multiline": "ignore"
            }],
            "vue/max-attributes-per-line": ["error", {
                "singleline": {
                    "max": 3
                },
                "multiline": {
                    "max": 1
                }
            }]
        }
    }
]
