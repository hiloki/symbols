/*jshint node:true*/
module.exports = function(grunt) {

	grunt.initConfig({
		webfont: {
			icons: {
				src: 'svg/*.svg',
				dest: 'symbol',
				destCss: 'css',
				options: {
					font: 'symbol',
					template: 'templates/template.css',
					htmlDemo: true,
					stylesheet: 'css',
					// stylesheet: 'less',
					// stylesheet: 'stylus',
					relativeFontPath: '../symbol/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-webfont');

	grunt.registerTask('default', ['webfont']);
	grunt.registerTask('build', ['default']);

};
