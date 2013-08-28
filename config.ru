use Rack::Static,
    :urls => ["/images", "/scripts", "/styles", "/bower_components"],
    :root => "app"

run lambda { |env|
    [
        200,
        {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
    },
        File.open('app/index.html', File::RDONLY)
    ]
}
