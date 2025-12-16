@echo off
echo ========================================
echo EDUVERSE Frontend Installation Script
echo ========================================
echo.

cd /d "%~dp0frontend"

echo Step 1: Cleaning npm cache...
call npm cache clean --force

echo.
echo Step 2: Installing React dependencies...
call npm install react@18.2.0 react-dom@18.2.0

echo.
echo Step 3: Installing React Router...
call npm install react-router-dom@6.20.1

echo.
echo Step 4: Installing Axios...
call npm install axios@1.6.2

echo.
echo Step 5: Installing React Icons...
call npm install react-icons@4.12.0

echo.
echo Step 6: Installing Vite (dev dependencies)...
call npm install --save-dev vite@5.0.8 @vitejs/plugin-react@4.2.1

echo.
echo Step 7: Installing TypeScript types (dev dependencies)...
call npm install --save-dev @types/react@18.2.43 @types/react-dom@18.2.17

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo You can now run: npm run dev
echo.
pause
