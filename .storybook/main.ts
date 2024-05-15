import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    webpackFinal: config => {
        config.resolve.modules = [...(config.resolve.modules || []), './src'];
        config.module.rules = [
            ...(config.module.rules || []),
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                type: 'javascript/auto',
                use: [{ loader: '@svgr/webpack', options: { icon: true } }, 'url-loader'],
            },
        ];

        return config;
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
