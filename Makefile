all: clean build

build:
	mkdir -p output/css
	cp -r fonts output/fonts
	cp -r img/ output/img
	cp -r js/ output/js
    sass --style compressed sass/base.sass output/css/base.min.css

clean:
	rm -rf output/
