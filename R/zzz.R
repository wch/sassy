.onLoad <- function(libname, pkgname) {
  assign("sass_ctx", QuickJSR::JSContext$new(stack_size = 0), envir = topenv())
  sass_bundle <- system.file("sass.js", package = "sassy", mustWork = TRUE)
  sass_ctx$source(file = sass_bundle)
}
