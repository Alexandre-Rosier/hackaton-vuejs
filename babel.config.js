module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	vueLoader: {
		transformToRequire: {
			img: "src",
			image: "xlink:href",
			audio: "src",
		},
	},
};
