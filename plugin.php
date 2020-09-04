<?php
/**
 * Plugin Name:       Forestry Calculations
 * Plugin URI:        https://github.com/jweston491/forestry-calc
 * Description:       Provides a series of formulas to calculate interest on various forestry/land values.
 * Version:           1.0
 * Author:            Jake Weston
 * Author URI:        https://github.com/jweston491/forestry-calc
 * Text Domain:       forestry-calculator
 */

defined( 'ABSPATH' ) || die( 'Direct script access disallowed.' );

define( 'FC_WIDGET_PATH', plugin_dir_url( __FILE__ ) );

define( 'FC_ASSET_MANIFEST', FC_WIDGET_PATH . 'build/asset-manifest.json' );
define( 'FC_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );

require_once FC_INCLUDES . '/enqueue.php';

// Add Shortcode
function forestry_calculator( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'formula' => '',
		),
		$atts
	);
	$uniqid = uniqid( 'id' );

	ob_start(); ?>
	<script>
	window.fcSettings = window.fcSettings || {};
	window.fcSettings["<?php echo $uniqid ?>"] = {
		'formula': '<?php echo $atts["formula"] ?>',
	}
	</script>

	<div class='fc-root' data-id='<?php echo $uniqid ?>'></div>

	<?php
	return ob_get_clean();

}
add_shortcode( 'forestry_calculator', 'forestry_calculator' );
