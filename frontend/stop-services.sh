#!/bin/bash
if [ "$(uname)" == "Darwin" ]; then
    launchctl unload ~/Library/LaunchAgents/com.wagmios.frontend.plist
    launchctl unload ~/Library/LaunchAgents/com.wagmios.backend.plist
    
else
    sudo systemctl stop wagmios-frontend.service
    sudo systemctl stop wagmios-backend.service
    
fi
