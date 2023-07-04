_:
    @just --list

do DIR +RECIPE:
    cd {{DIR}} && just {{RECIPE}}

run-mqtt-broker:
    docker run \
        -p 1883:1883 \
        -p 8083:8083 \
        -p 8084:8084 \
        -p 8883:8883 \
        -p 18083:18083 \
        emqx/emqx:latest
