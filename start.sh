#!/bin/bash
STARTEDFILE="./started"

d_start() {
    if [ ! -e $STARTEDFILE ]; then
        forever start -o ./logs/out.log -e ./logs/err.log index.js
        # So that running `vagrant provision` doesn't redownload everything
        touch $STARTEDFILE
    fi
}

d_stop() {
    
    if [ -e $STARTEDFILE ]; then
        forever stop index.js
        rm $STARTEDFILE
    fi
}

case $1 in
    start)
        echo -e "Starting"
        d_start
        ;;
    stop)
        echo -e "Stopping"
        d_stop
    ;;
    restart)
        echo -e "Restarting"
        if [ -f $PIDFILE ]; then
            $0 stop
        fi
        $0 start
        ;;
    *)
    echo "usage: {start|stop|restart}"
    exit 1
    ;;
esac

exit 0