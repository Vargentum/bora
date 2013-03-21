# Require any additional compass plugins here.
# -----------------------------------------------------------------------------
require "compass-h5bp"
#require "susy"
#require "animation"


# Set this to the root of your project when deployed:
# -----------------------------------------------------------------------------

http_path = "/"
css_dir = "css"
sass_dir = "css"
images_dir = "img"
javascripts_dir = "js"
# svg_dir = "svg"
# fonts_dir = "fonts"
# docs_dir = "docs"
# plugins_dir = "plugins"



# Output style
# -----------------------------------------------------------------------------

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded
# output_style = :compact
output_style = :compressed

# Remove SASS/Compass relative comments.
line_comments = false

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true


# SASS core
# -----------------------------------------------------------------------------

# Chrome needs a precision of 7 to round properly
Sass::Script::Number.precision = 7



# Stuff we don't really need below
# -----------------------------------------------------------------------------

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass src scss && rm -rf sass && mv scss sass
