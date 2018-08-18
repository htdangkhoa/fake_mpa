#!/bin/bash
cmdRm=$(now rm mpa -y)

cmdDeploy=$(now --public)

cmdLn="now ln mpa.now.sh"

if [ $? -ne 1 ]; then
  $cmdLn
fi