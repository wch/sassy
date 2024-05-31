#' @importFrom QuickJSR JSContext
#' @export sass
#' @examples
#' test_sass <- system.file("examples", "test.scss", package = "sassy")
#' sass(test_sass)
sass <- function(filename) {
  sass_ctx$call("sassy", normalizePath(filename))
}
