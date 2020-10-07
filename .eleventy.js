// add yaml support with npm install js-yaml --save-dev
// const yaml = require( 'js-yaml' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md' );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'images' );
	eleventyConfig.addPassthroughCopy( 'favicon' );
	eleventyConfig.addPassthroughCopy( 'resources' );

	eleventyConfig.addDataExtension( 'yml', contents => yaml.safeLoad( contents ) );

	eleventyConfig.addFilter( 'where', function( array, property, value ) {
		return array.filter( p => p[ property ] == value );
	} );

	eleventyConfig.addFilter( 'dateFormat', function( value, format ) {
		let moment = require( 'moment' );
		let dateValue = new Date( value );

		return moment( dateValue ).format( format );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false,
		ghostMode: false
	} );

	return {
		dir: {
			layouts: '_layouts'
		}
	};
};