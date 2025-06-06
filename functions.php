<?php
// Enqueue compiled assets
function astra_child_enqueue_assets() {
    wp_enqueue_style(
        'astra-child-style',
        get_stylesheet_directory_uri() . '/dist/css/style.css',
        [],
        filemtime(get_stylesheet_directory() . '/dist/css/style.css')
    );

    wp_enqueue_script(
        'astra-child-script',
        get_stylesheet_directory_uri() . '/dist/js/main.js',
        [],
        filemtime(get_stylesheet_directory() . '/dist/js/main.js'),
        true
    );
}
add_action('wp_enqueue_scripts', 'astra_child_enqueue_assets', 20);
