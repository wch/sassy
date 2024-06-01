Sassy
=====

This package is a proof of concept for using the Dart Sass library compiled to JavaScript, compiled to C using QuickJS, and calling the C code from R.


To install:

```R
remotes::install_github(c("andrjohns/QuickJSR", "wch/sassy"))
```

To use:

```R
library(sassy)

# Create a SCSS file
cat(".box {\n  height: 10px + 20px;\n}", file = "test.scss")

# Compile it to CSS
sass("test.scss")
#> .box {
#>   height: 30px;
#> }
```


## Notes

The file src/sass.c was generated from the JS code in this repository using QuickJS. See the instructions in the repository to see how to do this. https://github.com/wch/sass-quickjs
