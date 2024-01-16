#!/bin/bash

########################################
# Create a file based on the environment variables
# given by the dockerc run -e parameter
# - VUE_APP_ROOT
# - VUE_APP_KEYCLOAK
# - VUE_APP_WEBAPI
########################################
cat <<EOF
window.VUE_APP_K8S="${VUE_APP_K8S}"
EOF