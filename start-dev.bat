@echo off
SET "NODE_DIR=C:\Users\maxmudmv\.gemini\antigravity\brain\da070795-000c-49c1-aa87-0695ddc53f1c\scratch\node-v22.14.0-win-x64"
IF EXIST "%NODE_DIR%\node.exe" (
  SET "PATH=%NODE_DIR%;%PATH%"
)
echo Starting Elmurodov Mahmud 3D Portfolio on http://localhost:3000/uz ...
call npm run dev
