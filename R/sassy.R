#' @importFrom QuickJSR JSContext
#' @export sass
sass <- function(filename) {
  filecontent <- paste0(readLines(filename), collapse = "\n")
  sass_ctx$call("exports.compileString", filecontent)$css
}
