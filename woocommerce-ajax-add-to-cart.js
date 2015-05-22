jQuery( document ).ready(function() {

	jQuery('input.qty').keyup(function() {
		var quantity = jQuery('input.qty').val();
		if( jQuery.isNumeric( quantity ) ) {
			jQuery( '.add_to_cart_button' ).attr( 'data-quantity', quantity );
		}
		else {
			jQuery( '.add_to_cart_button' ).attr( 'data-quantity', '1' );
			jQuery('input.qty').val('1');
		}
	});
	
	jQuery('input.qty').change(function() {
		var quantity = jQuery('input.qty').val();
		if( jQuery.isNumeric( quantity ) ) {
			jQuery( '.add_to_cart_button' ).attr( 'data-quantity', quantity );
		}
		else {
			jQuery( '.add_to_cart_button' ).attr( 'data-quantity', '1' );
			jQuery('input.qty').val('1');
		}
	});

});
