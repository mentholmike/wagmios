#!/bin/bash

# Set the base directory (use the current directory if WAGMI_DIR is not set)
WAGMI_DIR="${WAGMI_DIR:-$HOME/wagmios}"

# Start the backend service
systemctl start wagmios-backend.service
sleep 10
# Start the frontend service
systemctl start wagmios-frontend.service
