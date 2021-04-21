#!/usr/bin/env sh
for repo in conformance encites libgfi liblice mingine temporalts; do
    echo $repo
    curl -s https://raw.githubusercontent.com/cutenode/$repo/master/README.md | doc-validator parse
done
