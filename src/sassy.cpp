#include <cpp11.hpp>
using namespace cpp11;
#include "sass.c"
#include <iostream>


//' @export
[[cpp11::register]]
void sass(std::string filename) {
    // set argv from filename
    char *argv[2];
    argv[0] = "sass";
    argv[1] = (char *)filename.c_str();

    sass_main(2, argv);
}
