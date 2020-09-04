<?php

defined( 'ABSPATH' ) || die( 'Direct script access diallowed.' );

add_action( 'init', function () {
	add_filter( 'script_loader_tag', function( $tag, $handle ) {
		if ( ! preg_match( '/^fc-/', $handle ) ) { return $tag; }
		return str_replace( ' src', ' async defer src', $tag );
	}, 10, 2 );
	add_action( 'wp_enqueue_scripts', function() {
		$request = wp_remote_get( FC_ASSET_MANIFEST );
		$body = wp_remote_retrieve_body( $request );
		$response = json_decode( $body );
		$asset_manifest = (Array) $response->files;
		$plugin_files_path = FC_WIDGET_PATH . 'build';
		if ( isset( $asset_manifest['main.js'] ) ) {
			wp_enqueue_style( 'fc', $plugin_files_path . $asset_manifest['main.css'] );

			wp_enqueue_script( 'fc-runtime', $plugin_files_path . $asset_manifest['runtime-main.js'], array(), null, true );

			wp_enqueue_script( 'fc-main', $plugin_files_path . $asset_manifest['main.js'], array( 'fc-runtime' ), null, true );

			foreach ( $asset_manifest as $key => $value ) {
				if ( preg_match( '@static/js/(.*)\.chunk\.js@', $key, $matches ) ) {
					if ( $matches && is_array( $matches ) && count( $matches ) === 2 ) {
						$name = 'fc-' . preg_replace( '/[^A-Za-z0-9_]/', '-', $matches[1] );
						wp_enqueue_script( $name, $plugin_files_path . $value, array( 'fc-main' ), null, true );
					}
				}
				if ( preg_match( '@static/css/(.*)\.chunk\.css@', $key, $matches ) ) {
					if ( $matches && is_array( $matches ) && count( $matches ) === 2 ) {
						$name = 'fc-' . preg_replace( '/[^A-Za-z0-9_]/', '-', $matches[1] );
						wp_enqueue_style( $name, $plugin_files_path . $value, array( 'fc' ), null );
					}
				}
			}
		}
	});
});
