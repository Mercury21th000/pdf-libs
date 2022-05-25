# Description
pdf-libs is REST-server that wraps extract-formfields and PDFtoHTMLEX utils

# Running without docker
* uncomment variables in .env file
* change PORT variable if need
* run `node main`

# Running with docker
* build an image: `docker build . --tag=pdf-libs`
* run a container with name and port you need: 
  
  `docker run --name pdf-libs1 -p 8080:8080 -e PORT=8080 pdf-libs`

# Docs
* Code documentation is at docs/index.html

# Licensing
This source code is licenced under the GPL, version 3

License text is available in LICENSE file
