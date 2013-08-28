use Rack::Static,
    :urls => ["/images", "/scripts", "/styles", "/bower_components"],
    :root => "dist"

run lambda { |env|
    [
        200,
        {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
    },
        File.open('dist/index.html', File::RDONLY)
    ]
}
